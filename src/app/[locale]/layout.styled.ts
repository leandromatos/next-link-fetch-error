'use client'

import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => theme.spacing.base};
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`
