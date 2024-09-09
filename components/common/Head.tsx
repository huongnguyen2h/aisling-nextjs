import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import _const from 'components/common/const'

const Head: FC<{ seoInfo: any }> = (props) => {
  return (
    <>
      <DefaultSeo {...props.seoInfo} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F2d86a5bb30f44d2db3564aa2962bb093"
        />
        <title>{_const.WEB_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
    </>
  )
}

export default Head
