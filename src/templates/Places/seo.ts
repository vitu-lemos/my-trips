import { NextSeoProps } from 'next-seo'

import DefaultConfig from 'seo/next-seo.config'
import { PlaceTemplateProps } from '.'

export const createSeoConfig = ({
  ...props
}: PlaceTemplateProps): NextSeoProps => {
  const gallery = props.place.gallery[0]
  return {
    title: `${props.place.name} - My Trip`,
    description: props.place.description?.text || DefaultConfig.description,
    openGraph: {
      images: [
        {
          url: gallery.url,
          width: gallery.width as number,
          height: gallery.height as number,
          alt: props.place.name
        }
      ]
    }
  }
}
