'use client'

import styled from 'styled-components'

export const Code = styled.div`
  font-family: ui-monospace, Menlo, monospace;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.base};
  background: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.base};
`
