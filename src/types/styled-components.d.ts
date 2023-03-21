import type { CSSProp } from 'styled-components'

import { theme } from '@/styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
