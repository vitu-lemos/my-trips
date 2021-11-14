import { Places } from 'models/places'
import { useRouter } from 'next/router'
import { MapContainer, Marker, Popup } from 'react-leaflet'

import CustomTileLayer from './CustomTileLayer'
import * as S from './styles'

interface Props {
  places?: Places
}

const Map = ({ places }: Props) => {
  const router = useRouter()
  const openPlace = (placeSlug: string) => {
    router.push(`place/${placeSlug}`)
  }
  const initialCoord = {
    lat: -14.2400732,
    lng: -53.1805017
  }

  return (
    <S.MapWrapper>
      <MapContainer
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        minZoom={3}
        center={[initialCoord.lat, initialCoord.lng]}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <CustomTileLayer />
        {places?.map((place) => {
          const { slug, name, location } = place
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${slug}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  openPlace(slug)
                }
              }}
            >
              <Popup>{`${name}`}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}
export default Map
