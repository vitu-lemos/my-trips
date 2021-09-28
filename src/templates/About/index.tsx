import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Container>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Header>My trips project </S.Header>
    <S.Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iusto
      illum rem officia dolores quas eaque asperiores facere, vitae id deserunt?
      Ea quo praesentium optio dignissimos. Recusandae earum saepe nam.
    </S.Body>
  </S.Container>
)

export default AboutTemplate
