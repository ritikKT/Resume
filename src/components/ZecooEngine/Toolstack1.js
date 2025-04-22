import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiUnrealengine,
  SiHeroku,
  SiUnity,SiCplusplus,
} from "react-icons/si";
import {
  GiSilverBullet
} from "react-icons/gi";
import {
  BsImages
} from "react-icons/bs";
function Toolstack1() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiSilverBullet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsImages />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack1;
