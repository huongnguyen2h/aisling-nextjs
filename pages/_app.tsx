import { FC } from 'react'
import type { AppProps } from 'next/app'
import Layout from '@components/common/Layout'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import Head from 'next/head'
builder.init(builderConfig.apiKey)

import '@builder.io/widgets'

import '/layout/layout.scss'
import '/layout/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

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
 // pageProps = ''
 console.log('_app pageProps: ', pageProps);
 
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
