import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiSpringboot,
  SiSpring,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiJava className="tech-icons" />
          <div className="tech-icon-caption">Java</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiJavascript1 className="tech-icons" />
          <div className="tech-icon-caption">JavaScript</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiReact className="tech-icons" />
          <div className="tech-icon-caption">React</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiTypescript className="tech-icons" />
          <div className="tech-icon-caption">TypeScript</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <FaVuejs className="tech-icons" />
          <div className="tech-icon-caption">Vue</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiMysql className="tech-icons" />
          <div className="tech-icon-caption">MySQL</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiGit className="tech-icons" />
          <div className="tech-icon-caption">Git</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiSpringboot className="tech-icons" />
          <div className="tech-icon-caption">Spring Boot</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiSpring className="tech-icons" />
          <div className="tech-icon-caption">Spring</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiPython className="tech-icons" />
          <div className="tech-icon-caption">Python</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <DiNodejs className="tech-icons" />
          <div className="tech-icon-caption">Node.js</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiPostgresql className="tech-icons" />
          <div className="tech-icon-caption">PostgreSQL</div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
