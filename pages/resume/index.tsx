import React, { useState } from 'react';

import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';

function Resume() {
  const [page, setPage] = useState(1);
  
  return (
    <div>
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
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

ReactPDF.render(<MyDocument />, "public/assets/test.pdf");
export default Resume;