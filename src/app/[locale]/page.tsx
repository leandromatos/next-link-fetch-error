import { notFound } from 'next/navigation'

import { GenerateMetadata, PageProps } from '@/app/[locale]/page.type'
import { Code } from '@/components/code'
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher'
import { i18n, translation } from '@/i18n/i18n'
import { AvailableLanguages } from '@/i18n/i18n.types'

import * as S from './page.styled'

const availableLanguages: AvailableLanguages = {
  'en-US': '/en-US',
  'pt-BR': '/pt-BR',
}

export const generateMetadata: GenerateMetadata = async ({ params: { locale } }) => {
  const { t } = await translation(locale, ['translations'])

  return {
    title: t('translations:head.title'),
    descriptipn: t('translations:head.description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...availableLanguages,
        'x-default': `/${i18n.defaultLocale}`,
      },
    },
  }
}

const HomePage: PageProps = async ({ params: { locale } }) => {
  const localeNotAvailable = !i18n.availableLocales.includes(locale)
  if (localeNotAvailable) return notFound()

  const { t } = await translation(locale, ['translations'])

  return (
    <S.Container>
      <p>Current locale: {locale}</p>
      <p>This text is rendered on the server: {t('translations:welcome')}</p>
      <Code>src/app/[locale]/page.tsx</Code>
      <LocaleSwitcher availableLanguages={availableLanguages} />
    </S.Container>
  )
}

export default HomePage
