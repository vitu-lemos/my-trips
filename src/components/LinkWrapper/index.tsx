import Link from 'next/link'
import * as S from './styles'

interface Props {
  href: string
  as?: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, as, children }: Props) => (
  <S.Wrapper>
    <Link as={as} href={href}>
      {children}
    </Link>
  </S.Wrapper>
)

export default LinkWrapper
