import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { GenericPage } from 'models/pages'

import { createSeoConfig } from './seo'
import * as S from './styles'

export interface GenericPageProps {
  genericPage: GenericPage
}

const GenericTemplate = ({ genericPage }: GenericPageProps) => {
  return (
    <>
      <NextSeo {...createSeoConfig({ genericPage })} />
      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>{genericPage.title} </S.Heading>
        <S.Body>
          <div
            dangerouslySetInnerHTML={{ __html: genericPage.description?.html }}
          />
        </S.Body>
      </S.Content>
    </>
  )
}
export default GenericTemplate
