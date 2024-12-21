import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhay Kumar </span>
            from <span className="purple"> Patna, Bihar.</span>
            <br />
            I am currently pursuing  Bachelor of Technology (B.Tech) in Computer Science Engineering at IIIT Una.
            <br />
            I am passionate for creating impactful projects and solving algorithmic problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
         
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
