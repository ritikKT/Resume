import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pyramid,Triangular Prism,Cylinder,Icosphere with subdivisions,Spiked Icosphere
            </li>
            <li className="about-activity">
              <ImPointRight /> Implemented import of obj files with vertices,uvs,normals from any 3D software that supports triangulated exports.
            </li>
            <li className="about-activity">
              <ImPointRight /> Implemented convex hull feature with import from obj.
            </li>
            <li className="about-activity">
              <ImPointRight /> Mesh creator from mathematical equations with subdivisions supported with different subdivisions methods (some equations may not work).
            </li>
            <li className="about-activity">
              <ImPointRight /> Mesh creator from mathematical equations thus Implementing data visualization.
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
