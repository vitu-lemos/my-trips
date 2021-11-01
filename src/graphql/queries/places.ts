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
      gallery(first: 1) {
        id
        url
      }
    }
  }
`
