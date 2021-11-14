import { TileLayer } from 'react-leaflet'

const CustomTileLayer = () => {
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_USER_ID
  const MAPBOX_STYLE_ID = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID

  const mapBoxIsAvailable =
    !!MAPBOX_API_KEY && MAPBOX_USER_ID && MAPBOX_STYLE_ID

  return mapBoxIsAvailable ? (
    <TileLayer
      attribution='© <a target="_blank" href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER_ID}/${MAPBOX_STYLE_ID}/tiles/512/{z}/{x}/{y}?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

export default CustomTileLayer
