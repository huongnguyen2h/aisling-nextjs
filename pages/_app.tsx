import { FC } from 'react'
import type { AppProps } from 'next/app'
import Layout from '@components/common/Layout'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)

import '@builder.io/widgets'
import '../blocks/ProductGrid/ProductGrid.builder'
import '../blocks/CollectionView/CollectionView.builder'
import '../blocks/ProductView/ProductView.builder'
import '../blocks/CloudinaryImage/CloudinaryImage.builder'

Builder.register('insertMenu', {
  name: 'Shopify Collections Components',
  items: [
    { name: 'CollectionBox', label: 'Collection stuff' },
    { name: 'ProductCollectionGrid' },
    { name: 'CollectionView' },
  ],
})

Builder.register('insertMenu', {
  name: 'Shopify Products Components',
  items: [
    { name: 'ProductGrid' },
    { name: 'ProductBox' },
    { name: 'ProductView' },
  ],
})

Builder.register('insertMenu', {
  name: 'Cloudinary Components',
  items: [{ name: 'CloudinaryImage' }],
})

const Noop: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
  {children}
  </>
)

export default function MyApp({ Component, pageProps }: AppProps) {
 console.log('pageProps: ', pageProps);
 
  return (
    <Layout pageProps={pageProps}>
    <iframe
      width="1045"
      height="588"
      src="https://www.youtube.com/embed/Frejv8ydgEQ?autoplay=1&loop=1"
      // src="https://www.youtube.com/embed/CjICgm2aT9o?list=PLWZyHUkTtlKz4CUUbX24vSpsACmx8I-0v&autoplay=1&loop=1"
      title="🔴 I&#39;M COLLABING WITH FAMOUS EU4 YOUTUBERS!  ⸜(｡˃ ᵕ ˂ )⸝♡ 【EU4 Live Multiplayer】"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
      <Component {...pageProps} />
    </Layout>
  )
}
