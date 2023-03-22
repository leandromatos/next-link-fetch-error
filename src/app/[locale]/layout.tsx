import { Inter } from 'next/font/google'
import Link from 'next/link'

import { translation } from '@/i18n/i18n'
import StyledComponentsProvider from '@/styled-components/styled-components.provider'

import * as S from './layout.styled'
import { LayoutProps } from './layout.type'
import { GenerateMetadata } from './page.type'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata: GenerateMetadata = async ({ params: { locale } }) => {
  const { t } = await translation(locale, ['translations'])

  return {
    title: {
      default: t('translations:head.title'),
      template: `%s | ${t('translations:head.title')}`,
    },
    icons: {
      icon: '/assets/images/favicon.ico',
    },
  }
}

const Layout: LayoutProps = ({ params: { locale }, children }) => {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StyledComponentsProvider>
          <S.Header>
            Go to:{' '}
            <Link href={`/${locale}`} lang={locale}>
              Home
            </Link>{' '}
            <Link href={`/${locale}/about`} lang={locale}>
              About
            </Link>{' '}
            <Link href={`/${locale}/legal/privacy-policy`} lang={locale}>
              Privacy Policy
            </Link>
          </S.Header>
          {children}
        </StyledComponentsProvider>
      </body>
    </html>
  )
}

export default Layout
