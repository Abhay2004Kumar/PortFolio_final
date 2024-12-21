import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate developer with a strong foundation in
              <i>
                <b className="purple"> C/C++, Python, and JavaScript. </b>
              </i>
              <br />
              <br />I specialize in developing efficient and scalable
              <b className="purple"> backend systems </b>
              and have a keen interest in
              <i>
                <b className="purple"> Machine Learning </b>
              </i>
              and
              <i>
                <b className="purple"> Web Technologies.</b>
              </i>
              <br />
              <br />My expertise includes creating impactful projects like
              <i>
                <b className="purple"> Top Scorer, Attendy Pro, </b>
              </i>
              and
              <i>
                <b className="purple"> Twitty-Tube, </b>
              </i>
              showcasing my ability to integrate modern tech stacks such as
              <b className="purple"> Node.js, React.js, and MongoDB.</b>
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
           
            <p>
              You can <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abhay2004Kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhay-kumar-74b16124a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2;
