import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clink from "../../Assets/Projects/Clink.png";
import BrickGame from "../../Assets/Projects/Brick.png";
import Tic from "../../Assets/Projects/TicTacToe.png";
import MindOfMadness from "../../Assets/Projects/MindOfMadness.png";
import SpacePatrol from "../../Assets/Projects/SpacePatrol.png";
import FSM from "../../Assets/Projects/FSM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MindOfMadness}
              isBlog={false}
              title="MIND OF MADNESS"
              description="A FPS Story based Adventure game.Wake up in mysterious place.Look for anyone in surroundings.Chat with npcs.Complete missions.Made with FSM,Behaviour Tree,Machine learning(0.6.1)"
              link="https://github.com/RitikBansal/MIND_OF_MADNESS"
              ylink0="https://www.youtube.com/watch?v=1X4Vrmih27M" 
              ylink1="https://www.youtube.com/watch?v=brzXZVKBVjY" 
              ylink2="a" 
              ylink3="https://www.youtube.com/watch?v=TP8Sifa6Cko"
              ylink4="https://www.youtube.com/watch?v=V5KiSKMpkZk"
              is1st={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FSM}
              isBlog={false}
              title="FMS Prototype"
              ylink0="https://youtu.be/5wfVVasBzxY"
              description="A small prototype made using FSM,Blendtree."
              link="https://github.com/RitikBansal/FSM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic}
              isBlog={false}
              title="AI based Tic Tac Toe"
              ylink0="https://youtu.be/coizkGgyigA"
              description="A AI based 2 player game ( One being AI itself ) .The traditional tic tac toe.Beat the AI if you can."
              link="https://github.com/RitikBansal/TicTacToe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clink}
              isBlog={false}
              title="Clink"
              ylink0="https://youtu.be/A8i26dhanuw"
              description="A 2d sprites based game.Jump across acid, Doge balls,Doge axes,jumpover snakes, collect lives, fire fireballs and destroy robots,doge lightning and have fun etc"
              link="https://github.com/Ritikbansal/CLINK_2D_Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpacePatrol}
              isBlog={false}
              ylink0="https://youtu.be/Xe_ySan9jxo"
              title="SpacePatrol"
              description="Choose a ship to patrol space having different statistics. Destroy enemies by shooting projectiles,destroy asteoroids roam acreoss."
              link="https://github.com/Ritikbansal/VR_SPACE_PATROL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrickGame}
              isBlog={false}
              ylink0="https://youtu.be/khEkuMhTXLQ"
              title="A 3D speed run ball game."
              description="Complete leveles in less time as much possible, try doge canon balls,build speed on ramps and speed surfaces and complete all levels."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
