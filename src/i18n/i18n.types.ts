import { i18n } from './i18n'

export type AvailableLocales = (typeof i18n)['availableLocales'][number]

export type AvailableLanguages = Record<AvailableLocales, string>
