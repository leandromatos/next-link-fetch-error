import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const i18n = {
  defaultLocale: 'en-US',
  availableLocales: ['en-US', 'pt-BR'],
  defaultNS: 'translations',
} as const

export async function translation(language: any, namespaces: any) {
  const i18nextInstance = createInstance()
  await i18nextInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace, callback) => {
        import(`./dictionaries/${language}/${namespace}.json`)
          .then(({ default: resources }) => callback(null, resources))
          .catch(error => callback(error, null))
      })
    )
    .init({
      // debug: true,
      supportedLngs: i18n.availableLocales,
      fallbackLng: i18n.defaultLocale,
      lng: language,
      fallbackNS: i18n.defaultNS,
      defaultNS: i18n.defaultNS,
      ns: namespaces,
      load: 'currentOnly',
      initImmediate: false,
    })

  return i18nextInstance
}
