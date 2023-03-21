import * as S from './code.styled'
import { CodeProps } from './code.type'

export const Code: React.FC<CodeProps> = ({ children }) => {
  return <S.Code>{children}</S.Code>
}
