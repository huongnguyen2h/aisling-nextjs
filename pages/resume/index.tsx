import React, { useState, useEffect, useRef } from 'react';

import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from '../../components/common/MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
import Head from 'next/head'

// import PSPDFKit from 'pspdfkit';

function Resume() {
  const [cvName, setCvName] = useState('huong');
	const containerRef = useRef(null);

  const getResume = async (cv: string) => {
    console.log("cvName: ", cv);

		const container = containerRef.current || "";

		if (typeof window !== 'undefined') {
      import('pspdfkit').then((PSPDFKit: any) => {
				if (PSPDFKit) {
					PSPDFKit.unload(container);
				}

				PSPDFKit.load({
					container,
					document: '/assets/cv_' + cv + '.pdf',
					baseUrl: `${window.location.protocol}//${window.location.host}/`,
				});
      });
		}
    // return <div ref={containerRef} style={{ height: '100vh' }} />
  }

	useEffect(() => {
    getResume(cvName)
	}, [cvName]);

  const handleCvChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCv = event.target.value;
    setCvName(selectedCv);
    const params = new URLSearchParams(window.location.search);
    params.set('cv', selectedCv);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Head>
        <title>Resume page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="cvSelect">Select Resume: </label>
        <select id="cvSelect" value={cvName} onChange={handleCvChange}>
          <option value="Huong">Resume Huong (English)</option>
          <option value="Huong-vi">Resume Huong (Vietnamese)</option>
        </select>
      </div>
      <div ref={containerRef} style={{ height: '100vh' }} />
    </div>
  )
}

export default Resume;
