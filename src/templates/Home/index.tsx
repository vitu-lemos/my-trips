import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import Map from 'components/Map'

const places = [
  {
    id: '1',
    name: 'Vitória da Conquista',
    slug: 'vitoria-da-conquista',
    location: {
      latitude: -14.8648,
      longitude: -40.8369
    }
  },
  {
    id: '2',
    name: 'Península de Maraú',
    slug: 'marau',
    location: {
      latitude: -14.1154,
      longitude: -38.9933
    }
  }
]
const HomeTemplate = () => (
  <>
    <LinkWrapper href="about">
      <InfoOutline size={32} />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
