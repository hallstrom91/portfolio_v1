import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPagenumber] = useState(1);

  function onDocumentLoadSucess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPagenumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPagenumber(pageNumber - 1);
    }
  };

  return (
    <>
      <div>
        <h1>PDF-Viewer</h1>
        {pageNumber && (
          <Document
            file="/downloads/resume.pdf"
            onLoadSuccess={onDocumentLoadSucess}
            className="h-50%"
          >
            <Page pageNumber={pageNumber} />
          </Document>
        )}
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="block">
          <button onClick={nextPage} className="flex">
            Next <GrFormNextLink size={23} />
          </button>
          <button onClick={previousPage} className="flex">
            Previous <GrFormPrevious size={23} />
          </button>
        </div>
      </div>
    </>
  );
}
