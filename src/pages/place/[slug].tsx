import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import apolloClient from 'graphql/apollo/client'
import {
  GetPlaceBySlugQuery,
  GetPlacesSlugQuery
} from 'graphql/generated/graphql'
import { GET_PLACES_SLUG, GET_PLACE_BY_SLUG } from 'graphql/queries/places'

import { Place } from 'models/places'

import LoaderContainer from 'components/LoaderContainer'

import PlacesTemplate from 'templates/Places'

interface Props {
  place: Place
}

const PlacePage = ({ place }: Props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <LoaderContainer loading />
  }
  return <PlacesTemplate place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: GetStaticPathsResult['paths'] = []

  const { data } = await apolloClient.query<GetPlacesSlugQuery>({
    query: GET_PLACES_SLUG,
    variables: { first: 5 }
  })

  const { places } = data || {}
  if (places) {
    paths = places.map(({ slug }) => ({ params: { slug } }))
  }

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<GetPlaceBySlugQuery>({
    query: GET_PLACE_BY_SLUG,
    variables: { slug: params?.slug }
  })
  const { place } = data || {}

  if (!place) return { notFound: true }

  return {
    props: {
      place
    },
    revalidate: 60
  }
}
export default PlacePage
