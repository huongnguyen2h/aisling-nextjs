import React, { useState, useEffect, useRef } from 'react';

import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from '../../components/common/MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
// import PSPDFKit from 'pspdfkit';

function Resume() {
  const [page, setPage] = useState(1);
	const containerRef = useRef(null);

  const getResume = async () => {
    const params = new URLSearchParams(window.location.search);
    let cvName = params.get('cv')
    if (!cvName) {
      cvName = "L"
    }

    console.log("cvName: ", cvName);

		const container = containerRef.current || "";

		if (typeof window !== 'undefined') {
      import('pspdfkit').then((PSPDFKit: any) => {
				if (PSPDFKit) {
					PSPDFKit.unload(container);
				}

				PSPDFKit.load({
					container,
					document: '/assets/cv_' + cvName + '.pdf',
					baseUrl: `${window.location.protocol}//${window.location.host}/`,
				});
      });
		}
    // return <div ref={containerRef} style={{ height: '100vh' }} />
  }

	useEffect(() => {
    getResume()
	}, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: '100vh' }} />
    </div>
  )
}

export default Resume;
