import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import attendyProImg from "../../Assets/Projects/attendyProImg.png"
import musicStreamerImg from "../../Assets/Projects/musicStreamerImg.jpg"
import topScorerImg from "../../Assets/Projects/topScorerImg.png"
import blogAppImg from "../../Assets/Projects/blogAppImg.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendyProImg}
              isBlog={false}
              title="AttendyPro"
              description="A sophisticated application designed to simplify attendance tracking in educational institutions or organizational settings by integrating facial recognition capabilities."
              ghLink="https://github.com/Abhay2004Kumar/AttendyPro-Face-Recognition-Attendance-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicStreamerImg}
              isBlog={false}
              title="Music Streamer App"
              description="A music streaming application developed using Kotlin. This app allows users to explore, stream, and manage their favorite tracks seamlessly."
              ghLink="https://github.com/Abhay2004Kumar/Music_Streamer_App"
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={topScorerImg}
    isBlog={false}
    title="Top Scorer (Collaborated)"
    description="A sports website designed to enhance inter-college sports events by providing real-time updates and efficient management of participants, matches, and scores. Built a user-friendly frontend for displaying match scores and details, ensuring a visually engaging experience."
    ghLink="https://github.com/Prasoon-kushwaha/top_scorer"
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogAppImg}
              isBlog={false}
              title="Blog App"
              description="A frontend blog application with backend appwrite service where users can create, edit, and delete posts. Built with a modern stack to provide an intuitive blogging experience."
              ghLink="https://github.com/Abhay2004Kumar/Blog_App"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
