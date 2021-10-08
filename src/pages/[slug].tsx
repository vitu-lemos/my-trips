import { useRouter } from 'next/router'

import apolloClient from 'graphql/apollo/client'
import {
  GET_GENERIC_PAGES_SLUG,
  GET_GENERIC_PAGE_BY_SLUG
} from 'graphql/queries/pages'

import GenericTemplate, { GenericPageProps } from 'templates/Generic'
import { GetStaticPaths, GetStaticProps } from 'next'

const GenericPage = ({ title, description }: GenericPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading...</p>
  }
  return <GenericTemplate title={title} description={description} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  interface Path {
    params: { [key: string]: string }
  }
  let paths: Path[] = []

  const { data } = await apolloClient.query({
    query: GET_GENERIC_PAGES_SLUG,
    variables: { first: 5 }
  })

  const pages = data?.genericPages
  if (pages) {
    paths = pages.map(({ slug }: { slug: string }) => ({ params: { slug } }))
  }

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_GENERIC_PAGE_BY_SLUG,
    variables: { slug: params?.slug }
  })
  const { genericPage } = data

  if (!genericPage) return { notFound: true }

  return {
    props: {
      title: genericPage.title,
      description: genericPage.description.html
    },
    revalidate: 60
  }
}

export default GenericPage
