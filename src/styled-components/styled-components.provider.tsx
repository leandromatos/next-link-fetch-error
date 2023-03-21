'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global.styled'
import { theme } from '@/styles/theme'

import StyledComponentsRegistry from './styled-components.registry'

export default function StyledComponentsProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
