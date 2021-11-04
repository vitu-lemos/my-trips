import { useEffect, useState } from 'react'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import apolloClient from 'graphql/apollo/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries/places'

import { Places } from 'models/places'

import LinkWrapper from 'components/LinkWrapper'
import Map from 'components/Map'
import LoaderContainer from 'components/LoaderContainer'

const HomeTemplate = () => {
  const [places, setPlaces] = useState<Places>()
  const [loading, setLoading] = useState(false)

  const getPlaces = async () => {
    setLoading(true)
    const { data } = await apolloClient.query<GetPlacesQuery>({
      query: GET_PLACES
    })
    setLoading(false)
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
      <LoaderContainer loading={loading} />
      <Map places={places} />
    </>
  )
}
export default HomeTemplate
