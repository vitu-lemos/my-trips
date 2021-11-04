import { render, screen } from '@testing-library/react'
import { Places } from 'models/places'
import Map from './Map'

describe('<Map/>', () => {
  it('should render leaflet map', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument
  })
  it('should render with marker in correct location', () => {
    const places: Places = [
      {
        name: 'Vitória da Conquista',
        slug: 'vitoria-da-conquista',
        location: {
          latitude: -14.8648,
          longitude: -40.8369
        },
        gallery: []
      },
      {
        name: 'Penísula de Maraú',
        slug: 'marau',
        location: {
          latitude: -14.1154,
          longitude: -38.9933
        },
        gallery: []
      }
    ]

    render(<Map places={places} />)

    places.forEach((place) => {
      expect(screen.getByTitle(place.name)).toBeInTheDocument()
    })
  })
})
