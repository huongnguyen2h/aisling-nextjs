/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { ThemeProvider, jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import { Button } from 'theme-ui'
import { ManagedUIContext, useUI } from '@components/common/context'
import Head from '@components/common/Head'
import Navbar from '@components/common/navbar/Navbar'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import Sidebar from '@components/common/Sidebar'
import { CommerceProvider } from '@lib/shopify/storefront-data-hooks'
import shopifyConfig from '@config/shopify'
import { builder, BuilderContent, Builder } from '@builder.io/react'
import themesMap from '@config/theme'
import seoConfig from '@config/seo.json'
import NoSSR from './NoSSR'

import ReactDOMServer from 'react-dom/server'

import _ from 'lodash'
import { NavigationMenuDemo } from './navbar/newNavbar'

// import { Metadata } from 'next';

// const metadata: Metadata = {
//   title: 'Acme Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// export {metadata}

// const _ = ''

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ssr: false,
})

const Layout: React.FC<{ pageProps: any; children: React.ReactNode }> = ({
  children,
  pageProps,
}) => {
  console.log('Layout children: ', _.cloneDeep(children))

  // const builderTheme = pageProps.theme
  let builderTheme: any
  return (
    <CommerceProvider {...shopifyConfig}>
      <BuilderContent content={builderTheme} modelName="theme">
        {(data, loading) => {
          if (loading && !builderTheme) {
            return 'loading ...'
          }
          const siteSettings = data?.siteSettings
          const colorOverrides = data?.colorOverrides
          // const siteSeoInfo = data?.siteInformation
          data.siteInformation = {
            ...data?.siteInformation,
            description:
              'A personal / blog website for a vtuber named AislingVT!',
            openGraph: {
              locale: 'en_IE',
              site_name: "Aisling's Planet",
              type: 'website',
              url: 'https://github.com/duyhung2h/aisling-nextjs',
            },
          }
          const siteSeoInfo = data?.siteInformation
          console.log('data: ', data)

          return (
            <ManagedUIContext key={data?.id} siteSettings={siteSettings}>
              <Head seoInfo={siteSeoInfo || seoConfig} />
              <InnerLayout
                themeName={data?.theme || 'base'}
                colorOverrides={colorOverrides}
              >
                {children}
              </InnerLayout>
            </ManagedUIContext>
          )
        }}
      </BuilderContent>
    </CommerceProvider>
  )
}
const ChildElement = (childComponents: any) => {
  console.log('ChildElement: ', childComponents)

  return (
    <>
      <div>{childComponents.children}</div>
    </>
  )
}

const onClickHndlr = (e: any) => {
  return e
}

const InnerLayout: React.FC<{
  themeName: string
  children: React.ReactNode
  colorOverrides?: {
    text?: string
    background?: string
    primary?: string
    secondary?: string
    muted?: string
  }
}> = ({ themeName, children, colorOverrides }) => {
  let RenderedChildren: any
  try {
    const childrenElement = React.createElement(
      ChildElement,
      {
        onClickHndlr: onClickHndlr,
      },
      [children]
    )
    console.log('childrenElement: ', childrenElement)
    console.log('InnerLayout children: ', RenderedChildren)
    RenderedChildren = (
      <ChildElement>{childrenElement.props.children[0]}</ChildElement>
    )
  } catch (error) {
    console.log(error)
    RenderedChildren = <>dicks</>
  }
  const theme = {
    ...themesMap[themeName],
    colors: {
      ...themesMap[themeName].colors,
      ...colorOverrides,
    },
  }
  const { displaySidebar, closeSidebar } = useUI()
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <div>
        <NavigationMenuDemo />
      </div> */}
      <div
        sx={{
          margin: `0 auto`,
          px: 20,
          maxWidth: 1920,
          minWidth: '60vw',
          minHeight: 800,
        }}
      >
        {RenderedChildren}
      </div>
      <NoSSR>
        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={Builder.isEditing ? true : acceptedCookies}
          action={
            <Button onClick={() => onAcceptCookies()}>Accept cookies</Button>
          }
        />
      </NoSSR>
    </ThemeProvider>
  )
}

export default Layout
