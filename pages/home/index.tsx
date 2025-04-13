import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '@components/common/Layout'
import Head from 'next/head'
// import _const from '@components/common/const'
// import { builder, Builder } from '@builder.io/react'
// import builderConfig from '@config/builder'
// builder.init(builderConfig.apiKey)

// import '@builder.io/widgets'
// import '../blocks/ProductGrid/ProductGrid.builder'
// import '../blocks/CollectionView/CollectionView.builder'
// import '../blocks/ProductView/ProductView.builder'
// import '../blocks/CloudinaryImage/CloudinaryImage.builder'

// Builder.register('insertMenu', {
//   name: 'Shopify Collections Components',
//   items: [
//     { name: 'CollectionBox', label: 'Collection stuff' },
//     { name: 'ProductCollectionGrid' },
//     { name: 'CollectionView' },
//   ],
// })

// Builder.register('insertMenu', {
//   name: 'Shopify Products Components',
//   items: [
//     { name: 'ProductGrid' },
//     { name: 'ProductBox' },
//     { name: 'ProductView' },
//   ],
// })

// Builder.register('insertMenu', {
//   name: 'Cloudinary Components',
//   items: [{ name: 'CloudinaryImage' }],
// })

const Noop: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
)

export default function MyApp({ Component, pageProps }: AppProps) {
  // pageProps = ''

  console.log('_app pageProps: ', pageProps)
  let WEB_TITLE = "Aisling's Planet"
  let HOME = `Home`
  
  // IMPORTANT: Replace 'localhost' with your actual website domain for production!
  // You might need multiple parent parameters if you have multiple domains (e.g., preview domains)
  const twitchParentDomain = 'localhost' 

  return (
    <Layout pageProps={pageProps}>
      <Head>
        <title>
          {WEB_TITLE} - {HOME}
        </title>
      </Head>
      
      {/* Twitch Embed Section */}
      <div style={{ display: 'flex', height: '720px', width: '100%', gap: '10px' }}>
        {/* Twitch Video Player */}
        <iframe
          src={`https://player.twitch.tv/?channel=aislingvt&parent=${twitchParentDomain}`}
          height="100%"
          width="75%"
          allowFullScreen={true}
          style={{ border: 'none' }}
          title="Twitch Stream Player"
        ></iframe>
        
        {/* Twitch Chat */}
        <iframe
          src={`https://www.twitch.tv/embed/aislingvt/chat?parent=${twitchParentDomain}`}
          height="100%"
          width="25%"
          style={{ border: 'none' }}
          title="Twitch Stream Chat"
        ></iframe>
      </div>

      {/* You can add other homepage content below */}
      {/* <Component {...pageProps} /> */}
    </Layout>
  )
}