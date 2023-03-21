import { notFound } from 'next/navigation'

import { GenerateMetadata, PageProps } from '@/app/[locale]/page.type'
import { Code } from '@/components/code'
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher'
import { i18n, translation } from '@/i18n/i18n'
import { AvailableLanguages } from '@/i18n/i18n.types'

import * as S from './page.styled'

const availableLanguages: AvailableLanguages = {
  'en-US': '/en-US/about',
  'pt-BR': '/pt-BR/about',
}

async function getMockData() {
  console.log('Fetching mock data ...')
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res.json())
    }, 2000)
  })
}

export const generateMetadata: GenerateMetadata = async ({ params: { locale } }) => {
  const { t } = await translation(locale, ['translations'])

  return {
    title: t('translations:about.title'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...availableLanguages,
        'x-default': `/${i18n.defaultLocale}`,
      },
    },
  }
}

const AboutPage: PageProps = async ({ params: { locale } }) => {
  await getMockData()

  const localeNotAvailable = !i18n.availableLocales.includes(locale)
  if (localeNotAvailable) return notFound()

  const { t } = await translation(locale, ['translations'])

  return (
    <S.Container>
      <p>Current locale: {locale}</p>
      <p>This text is rendered on the server: {t('translations:welcome')}</p>
      <Code>src/app/[locale]/about/page.tsx</Code>
      <LocaleSwitcher availableLanguages={availableLanguages} />
    </S.Container>
  )
}

export default AboutPage
