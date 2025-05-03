import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import AiAlgoExpert from "./icons/algo-expert-icon";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { SiFoodpanda, SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { CgGitFork } from "react-icons/cg";
import { ImMusic, ImTelegram } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,AiOutlineBorderlessTable
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { BiFoodMenu } from "react-icons/bi";
import { GiFoodChain } from "react-icons/gi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/leetcode"
                onClick={() => updateExpanded(false)}
              >
                <SiLeetcode
                  style={{ marginBottom: "2px" }}
                />{" "}
                My Leetcode
              </Nav.Link>
            </Nav.Item>

            
            <Nav.Item>
              <Nav.Link
                as="a"
                href="https://email.ritik.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineMail style={{ marginBottom: "2px" }} /> Temporary Email 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/algoexpert"
                onClick={() => updateExpanded(false)}
              >
                <AiAlgoExpert
                  style={{ marginBottom: "2px" }}
                />{" "}
                Algoexpert Certificate
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://t.me/ritikrobot"
                target="_blank"
                rel="noreferrer"
              >
                <ImTelegram style={{ marginBottom: "2px" }} /> Telegram Bot
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://dinner-candy.ritik.app/"
                target="_blank"
                rel="noreferrer"
              >
                <SiFoodpanda style={{ marginBottom: "2px" }} /> Dinner Candy
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://music.ritik.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImMusic style={{ marginBottom: "2px" }} /> Music Website
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/zecoo"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineBorderlessTable style={{ marginBottom: "2px" }} /> Zecoo Engine
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/RitikBansal"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
