import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

export interface GenericPageProps {
  title: string
  description: string
}

const GenericTemplate = ({ description, title }: GenericPageProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{title} </S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </S.Body>
    </S.Content>
  )
}
export default GenericTemplate
