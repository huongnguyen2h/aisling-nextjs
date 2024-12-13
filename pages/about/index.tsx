import React, { useState, useEffect, useRef } from 'react'

import ReactPDF from '@react-pdf/renderer'
import { MyDocument } from '../../components/common/MyDocument'
import { PDFViewer } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Card } from 'antd'

// import PSPDFKit from 'pspdfkit';

function About() {
  const [page, setPage] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {}, [])

  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div ref={containerRef} style={{ height: '100vh' }} /> */}
      <div className='w-100'>
        <img className='w-100 flex-100' src="/assets/profile_banner.jpg" alt="banner image"></img>
      </div>
      click here to see my CV! (cv does not have name in it)
    </div>
  )
}

export default About
