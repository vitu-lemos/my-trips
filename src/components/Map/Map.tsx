import { Places } from 'models/places'
import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface Props {
  places?: Places
}

const Map = ({ places }: Props) => {
  const router = useRouter()
  const openPlace = (placeSlug: string) => {
    router.push(`place/${placeSlug}`)
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
      minZoom={3}
      maxBounds={[
        [-180, 180],
        [180, -180]
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
  )
}
export default Map
