import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import AboutcardMy from "./AboutCardMy";
import laptopImg from "../../Assets/zecoo.png";
import Toolstack from "./Toolstack";
import Toolstack1 from "./Toolstack1";
import Button from 'react-bootstrap/Button';
import MyCarousel from './App1';
import Vedio from './App2';
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.7em", paddingBottom: "20px" }}>
            Open Source <strong className="purple">3D Graphics Engine <strong className="purple"> - Zecoo Engine</strong>
</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Graphics API </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Languages Used</strong>
        </h1>
        <Toolstack />
        

<h1 className="project-heading">
  <strong className="purple">OPEN SOURCE API USED</strong>
</h1>
<Toolstack1 />

<h1 className="project-heading">
  <strong className="purple">WORKS I HAVE DONE</strong>
</h1><h1 className="project-heading">
  
</h1>
<Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.7em", paddingBottom: "20px" }}>
            <strong className="purple"> My Works and contributions <strong className="purple"> </strong>
</strong>
            </h1>
            <AboutcardMy />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

<MyCarousel/>

<Vedio/><h1></h1>
        <Github />
      </Container>
      
    </Container>
    
  );
}

export default About;
