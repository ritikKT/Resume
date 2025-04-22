import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            <br />zecooEngine is an open-source C++ graphics engine developed to support research and development areas those involve 3d graphics, Some of them are scientific visualization, computational photography, scientific computing, computational geometry, Physics and other Simulations, Game development etc. zecooEngine supports OpenGL 3.3 as a graphic API. You can draw 3d models, add lights, apply textures while creating materials. It provides features to add physics on the models using Bullet Physics Engine, can add force, apply constraints, can test collision between bodies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Draw basic primitives like cube, cone, cylinder and sphere etc.
            </li>
            <li className="about-activity">
              <ImPointRight /> Basic lighting using directional, point and spot dynamic lights.
            </li>
            <li className="about-activity">
              <ImPointRight /> Draw ray, line for debugging.
            </li>
            <li className="about-activity">
              <ImPointRight /> Rigid body dynamics: static, dynamic and kinematic bodies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Collision detection with triggers and callbacks.
            </li>
            
              <li className="about-activity">
              <ImPointRight /> External 3d model import via Assimp library.
            </li>
            <li className="about-activity">
              <ImPointRight /> Inputs using mouse, keyboard.
            </li>
            <li className="about-activity">
              <ImPointRight /> Inputs using mouse, keyboard.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Open Source 3d Graphics Engine!"{" "}
          </p>
          <footer className="blockquote-footer">Zecoo Engine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
