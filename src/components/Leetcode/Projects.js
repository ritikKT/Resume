import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import cvFile from "../../Assets/algo_expert_certificate.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Tell pdf.js where to find its worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/** First‑page *intrinsic* width of the PDF in pixels (inspect once in dev‑tools) */
const PDF_PAGE_WIDTH = 2718;

/** ‑‑‑‑‑ Component ‑‑‑‑‑ */
export default function AlgoExpertCertificate() {
  const [scale, setScale] = useState(1.5);

  /** Recalculate scale whenever window resizes */
  const computeScale = useCallback(() => {
  const viewport = window.innerWidth - 32;      // 16 px padding each side
  const fitted   = Math.min(900, viewport);     // cap at 900 px
  const base     = fitted / PDF_PAGE_WIDTH;     // original scale
  setScale(base * 3.5);                         // 20 % larger
}, []);


  useEffect(() => {
    computeScale();                                   // on mount
    window.addEventListener("resize", computeScale);  // on resize
    return () => window.removeEventListener("resize", computeScale);
  }, [computeScale]);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* ───── Top Download Button ───── */}
      {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={cvFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Certificate
          </Button>
        </Row> */}

      {/* ───── PDF Page ───── */}
      <Row className="justify-content-center mb-3 mt-3">
        <Document
          file="/leetcode_com.pdf"
          loading="Loading stats... Please be patient it takes some time to load 😬"
          className="d-flex justify-content-center"
        >
          <Page
            pageNumber={1}
            scale={scale}
            renderTextLayer={false}      /* optional: speed */
          />
        </Document>
      </Row>

      {/* ───── Bottom Download Button ───── */}
      {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={cvFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Certificate
          </Button>
        </Row> */}
    </Container>
  );
}
