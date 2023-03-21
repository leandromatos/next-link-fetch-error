import { createGlobalStyle } from 'styled-components'

import { ResetStyle } from './reset.styled'

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  html,
  body,
  div#__next,
  div#__next > div {
    width: 100%;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    line-height: 20px;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }
`
