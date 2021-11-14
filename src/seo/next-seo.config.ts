import { NextSeoProps } from 'next-seo'

const config: NextSeoProps = {
  title: 'My Trips',
  description: 'A simple project to show my trips around the world',
  canonical: 'my-trips.vitu-lemos.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'my-trips.vitu-lemos.com',
    title: 'My Trips',
    description: 'A simple project to show my trips around the world',
    images: [
      {
        url: 'my-trips.vitu-lemos.com/img/cover.png',
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
