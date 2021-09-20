import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface Place {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

interface Props {
  places?: Place[]
}

const Map = ({ places }: Props) => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={3}
    scrollWheelZoom={true}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map((place) => {
      const { id, name, location } = place
      const { latitude, longitude } = location
      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        >
          <Popup>{`You are in ${name}`}</Popup>
        </Marker>
      )
    })}
  </MapContainer>
)
export default Map
