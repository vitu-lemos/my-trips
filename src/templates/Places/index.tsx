import { Place } from 'models/places'

interface Props {
  place: Place
}
const PlacesTemplate = ({ place }: Props) => {
  return <h1>{place.name}</h1>
}

export default PlacesTemplate
