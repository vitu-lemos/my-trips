import { NextSeoProps } from 'next-seo'

import DefaultConfig from 'seo/next-seo.config'

import { GenericPageProps } from '.'

export const createSeoConfig = ({
  ...props
}: GenericPageProps): NextSeoProps => {
  return {
    title: `${props.genericPage.title} - My Trips`,
    description:
      props.genericPage.description?.text || DefaultConfig.description
  }
}
