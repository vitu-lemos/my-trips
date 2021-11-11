import { NextSeoProps } from 'next-seo'

const config: NextSeoProps = {
  title: 'My Trips',
  description: 'A simple project to show my trips around the world',
  canonical: 'https:my-trips.com.br-CHANGE-URL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https:my-trips.com.br-CHANGE-URL',
    title: 'My Trips',
    description: 'A simple project to show my trips around the world',
    images: [
      {
        url: 'https:my-trips.com.br-CHANGE-URL/img/cover.png',
        width: 1280,
        height: 720,
        alt: 'My Trips'
      }
    ],
    site_name: 'My Trips'
  },
  twitter: {
    handle: '@vitu_lemos',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default config
