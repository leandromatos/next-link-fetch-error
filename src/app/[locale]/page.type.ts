import { Metadata } from 'next'

import { AvailableLocales } from '@/i18n/i18n.types'

export type GenerateMetadata = (props: { params: { locale: AvailableLocales } }) => Promise<Metadata>

export type PageProps = (props: { params: { locale: AvailableLocales } }) => Promise<JSX.Element>
