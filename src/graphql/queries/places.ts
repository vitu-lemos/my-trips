import gql from 'graphql-tag'

export const GET_PLACES = gql`
  query GetPlaces {
    places {
      slug
      name
      location {
        latitude
        longitude
      }
      gallery(first: 3) {
        id
        url
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query GetPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      slug
      name
      description {
        html
      }
      gallery {
        url
        id
      }
    }
  }
`

export const GET_PLACES_SLUG = gql`
  query GetPlacesSlug($first: Int!) {
    places(first: $first) {
      slug
    }
  }
`
