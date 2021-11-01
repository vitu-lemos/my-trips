import { useEffect, useState } from 'react'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import apolloClient from 'graphql/apollo/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries/places'

import { Places } from 'models/places'

import LinkWrapper from 'components/LinkWrapper'
import Map from 'components/Map'

const HomeTemplate = () => {
  const [places, setPlaces] = useState<Places>()

  const getPlaces = async () => {
    const { data } = await apolloClient.query<GetPlacesQuery>({
      query: GET_PLACES
    })

    if (data.places) {
      setPlaces(data.places)
    }
  }
  useEffect(() => {
    getPlaces()
  }, [])

  return (
    <>
      <LinkWrapper href="about">
        <InfoOutline size={32} />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
export default HomeTemplate
