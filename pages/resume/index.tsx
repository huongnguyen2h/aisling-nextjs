import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  
  return (
    <div>
      <div>
        {/* <Document
          file="/assets/test.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        > */}
          {/* <Page pageNumber={pageNumber} /> */}
        {/* </Document> */}
        <p>Page {pageNumber} of {numPages}</p>
      </div>
      <embed
        src={"/assets/test.pdf"}
        style={{
          width: '100%',
          height: '100%',
          flexGrow: '0',
          flexShrink: '1',
        }}
        type='application/pdf'
      />
      <object data="/assets/test.pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="/assets/resume.pdf">to the PDF!</a></p>
      </object>
  </div>
  )
}

export default Resume;