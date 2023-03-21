import { AvailableLocales } from '@/i18n/i18n.types'

export type LayoutProps = (props: { children: React.ReactNode; params: { locale: AvailableLocales } }) => JSX.Element
