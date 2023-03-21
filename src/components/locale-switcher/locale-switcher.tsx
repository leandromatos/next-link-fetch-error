'use client'

import Link from 'next/link'

import { LocaleSwitcherProps } from './locale-switcher.type'

const LocaleSwitcher: LocaleSwitcherProps = ({ availableLanguages }) => {
  return (
    <ul>
      {Object.entries(availableLanguages).map(([lang, href]) => (
        <li key={lang}>
          <Link href={href as string} hrefLang={lang}>
            {lang}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LocaleSwitcher
