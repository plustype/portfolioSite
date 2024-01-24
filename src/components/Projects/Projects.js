import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gcs from "../../Assets/Projects/gcs.jpg"
import kb from "../../Assets/Projects/kb.png"
import garden from "../../Assets/Projects/garden.png"
import todo from "../../Assets/Projects/todo.png"
import mario from "../../Assets/Projects/mario.png"
import ims from "../../Assets/Projects/ims.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcs}
              isBlog={false}
              title="UAV Ground Control System"
              description="An enterprise-level software called Ground Control Station (GCS) for drone systems, using Java. GCS is a desktop drone operation software enabling fleet management, flight planning, real-time drone control, and flight data analysis."
               //ghLink="https://github.com/soumyajit4419/Chatify"
               //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kb}
              isBlog={false}
              title="Online Knowledge Base"
              description="This is an online knowledge base application where users can create their own accounts and manage their knowledge documents with a clear and easy-to-use interface."
              ghLink="https://github.com/plustype/Online-Knowledge-Base-Application"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garden}
              isBlog={false}
              title="Gardening Business Website"
              description="A business website of a gardening company. It shows all the infomation that customers need to know including the services, teams and priceing. Also allow customer send request to business owner"
              ghLink="https://github.com/ProWebDevelop/servicetemplate"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="This a simple web-based Todo task management application. It supports multiple user accounts, each user can access their own todo list. User are able to create/update/delete/search todo tasks."
              ghLink="https://github.com/plustype/TodoAPP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mario}
              isBlog={false}
              title="Mario Game Demo"
              description="This is a game demo which realized the basic game play of Super Mario game. The player can control Mario forward, backward and jump. There are moving enemies and unmoved blocks on the stage. Enemies can be eliminated by treading onto them. Bricks can be eliminated by jump and hit. At the end, Mario needs to jump to pull off the flag form the pole to clear the stage. The score is displayed on the screen."
              ghLink="https://github.com/plustype/MarioGameDemo"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ims}
              isBlog={false}
              title="Inventory Management System Demo"
              description="A simple desktop version of inventory management system. Used to practice building back-end and database through Spring Boot and MySQL "
              ghLink="https://github.com/plustype/IMSDemo"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
