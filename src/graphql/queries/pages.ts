import gql from 'graphql-tag'

export const GET_GENERIC_PAGES_SLUG = gql`
  query GetGenericPages($first: Int) {
    genericPages(first: $first) {
      slug
    }
  }
`

export const GET_GENERIC_PAGE_BY_SLUG = gql`
  query GetGenericPageBySlug($slug: String!) {
    genericPage(where: { slug: $slug }) {
      slug
      title
      description {
        html
        text
      }
    }
  }
`
