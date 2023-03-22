import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from './i18n/i18n'

const getLocale = (request: NextRequest): string => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  // Use negotiator and intl-localematcher to get best locale
  const requestedLocales = new Negotiator({ headers: negotiatorHeaders }).languages()
  const availableLocales = i18n.availableLocales.slice()
  const defaultLocale = i18n.defaultLocale

  return matchLocale(requestedLocales, availableLocales, defaultLocale)
}

export const middleware = (request: NextRequest) => {
  // Skip next internal and image requests
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    /\.(.*)$/.test(request.nextUrl.pathname)
  )
    return

  // Check if there is any supported locale in the pathname
  let pathname = request.nextUrl.pathname
  const search = request.nextUrl.search

  // Let's redirect if there is no locale
  if (request.nextUrl.pathname === '/') {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}${pathname}${search}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|assets).*)'],
}
