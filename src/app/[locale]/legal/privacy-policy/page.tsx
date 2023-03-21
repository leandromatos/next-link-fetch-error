import { notFound } from 'next/navigation'

import { GenerateMetadata, PageProps } from '@/app/[locale]/page.type'
import { Code } from '@/components/code'
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher'
import { i18n, translation } from '@/i18n/i18n'
import { AvailableLanguages } from '@/i18n/i18n.types'

import * as S from './page.styled'

const availableLanguages: AvailableLanguages = {
  'en-US': '/en-US/legal/privacy-policy',
  'pt-BR': '/pt-BR/legal/privacy-policy',
}

export const generateMetadata: GenerateMetadata = async ({ params: { locale } }) => {
  const localeNotAvailable = !i18n.availableLocales.includes(locale)
  if (localeNotAvailable) return notFound()

  const { t } = await translation(locale, ['translations'])

  return {
    title: t('translations:legal.privacyPolicy.title'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...availableLanguages,
        'x-default': `/${i18n.defaultLocale}`,
      },
    },
  }
}

const PrivacyPolicyPage: PageProps = async ({ params: { locale } }) => {
  const localeNotAvailable = !i18n.availableLocales.includes(locale)
  if (localeNotAvailable) return notFound()

  const { t } = await translation(locale, ['translations'])

  return (
    <S.Container>
      <p>Current locale: {locale}</p>
      <p>This text is rendered on the server: {t('server-component.welcome')}</p>
      <Code>src/app/[locale]/legal/privacy-policy/page.tsx</Code>
      <LocaleSwitcher availableLanguages={availableLanguages} />
    </S.Container>
  )
}

export default PrivacyPolicyPage
