/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { BuilderComponent, builder } from '@builder.io/react'
import { useCart } from '@lib/shopify/storefront-data-hooks'
import { jsx, Box, useThemeUI, Heading, Button } from 'theme-ui'
import { useUI } from '@components/common/context'
import Image from 'next/legacy/image'
import Searchbar from '../Searchbar'
import Link from '@components/common/Link'
import { Bag } from '@components/icons'
import { NavbarService } from 'db/NavbarService'
import styles from '/layout/sass/_footerAndNavbar.module.scss'

const Navbar: FC = () => {
  const [announcement, setAnnouncement] = useState()
  const { theme } = useThemeUI()
  const { logo, openSidebar } = useUI()
  const [navigationLinks, setNavigationLinks]: any = useState()
  const cart = useCart()
  const navbarService: any = NavbarService

  async function fetchNavbarLinks() {
    try {
      const res = await NavbarService.getAllNavbarLinks()
      console.log('res: ', res)
      let data = await res?.json()
      console.log('data: ', data)
      setNavigationLinks(data)
    } catch (error) {
      setNavigationLinks([])
    }
  }

  const getNavigationLinks = () => {
    try {
      return navigationLinks?.map((link: any, index: any) => (
        <Link
          key={index}
          sx={{ padding: 10 }}
          href={link?.link || '//'}
          target={link?.target || ''}
        >
          {link?.title}
        </Link>
      ))
    } catch (error) {
      return null
    }
  }

  useEffect(() => {
    fetchNavbarLinks()
  }, [cart?.lineItems])

  console.log('navigationLinks: ', navigationLinks)
  const params = new URLSearchParams(window.location.search)
  let cvName = params.get('cv')

  return (
    <React.Fragment>
      {!cvName ? (
        <div className={styles.navbarTheme}>
          {/* <BuilderComponent
        content={announcement}
        data={{ theme }}
        model="announcement-bar"
      /> */}
          <Box
            as="header"
            sx={{
              margin: `0 auto`,
              maxWidth: 1920,
              py: 2,
              px: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              width: '100%',
              // flexDirection: 'column-reverse'
            }}
          >
            <Box
              sx={{
                // transform: 'translateX(-50%)',
                // left: '50%',
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // flexGrow: 1,
                flexShrink: 0,
              }}
            >
              <Heading
                sx={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {logo && logo.image && (
                  <Link
                    href="/"
                    sx={{
                      letterSpacing: -1,
                      textDecoration: `none`,
                      paddingLeft: '5px',
                    }}
                  >
                    <Image
                      alt="Logo"
                      width={logo.width}
                      height={logo.height}
                      src={logo.image}
                    ></Image>
                  </Link>
                )}
                {logo && logo.text && !logo.image && (
                  <Link
                    href="/"
                    sx={{
                      letterSpacing: -1,
                      textDecoration: `none`,
                      paddingLeft: '5px',
                    }}
                    className={styles.navbarTitleLeft}
                  >
                    {/* {logo.text} */}
                    ♡【Henlo! This is Aisling's Planet!】♡ (This is a WIP
                    website!)
                  </Link>
                )}
              </Heading>
            </Box>

            <Box
              sx={{
                display: ['flex', 'flex', 'flex'],
                flexBasis: 0,
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'flex-end',
                width: '100%'
              }}
              className={styles.navbarNavigationLinks}
            >
              {getNavigationLinks()}
            </Box>

            {/* <Box
          sx={{
            display: 'flex',
            minWidth: 140,
            width: '100%',
            justifyContent: ['space-between', 'flex-end'],
          }}
        > */}
            {/* <Searchbar /> */}
            {/* <Button onClick={openSidebar} aria-label="Cart">
            <Bag />
          </Button> */}
            {/* </Box> */}
          </Box>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  )
}

export default Navbar
