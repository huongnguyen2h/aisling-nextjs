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
        src={'/assets/test.pdf'}
        style={{
          width: '100%',
          height: '100%',
          flexGrow: '0',
          flexShrink: '1',
        }}
        type="application/pdf"
      />
      <object
        data="/assets/test.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{' '}
          <a href="/assets/resume.pdf">to the PDF!</a>
        </p>
      </object>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.Contrary to popular belief,
      Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur, from
      a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
      line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not
      simply random text. It has roots in a piece of classical Latin literature
      from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
      "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.Contrary to popular belief,
      Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur, from
      a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
      line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not
      simply random text. It has roots in a piece of classical Latin literature
      from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
      "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.Contrary to popular belief,
      Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur, from
      a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
      line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not
      simply random text. It has roots in a piece of classical Latin literature
      from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
      "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.Contrary to popular belief,
      Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur, from
      a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
      line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not
      simply random text. It has roots in a piece of classical Latin literature
      from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
      "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </div>
  )
}

// ReactPDF.render(<MyDocument />, "public/assets/test.pdf");
export default Resume;
