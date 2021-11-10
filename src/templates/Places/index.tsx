import { useRouter } from 'next/router'
import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import { Place } from 'models/places'

import LinkWrapper from 'components/LinkWrapper'
import LoaderContainer from 'components/LoaderContainer'

import * as S from './styles'

interface Props {
  place: Place
}
const PlacesTemplate = ({ place }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <LoaderContainer loading />
  }
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((item) => (
              <Image
                height={750}
                width={1000}
                key={item.id}
                src={item.url}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
