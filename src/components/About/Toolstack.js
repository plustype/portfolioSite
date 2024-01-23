import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiIntellijidea,
} from "react-icons/si";

import { FaFigma, FaAws, } from "react-icons/fa";


function Toolstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiVisualstudiocode className="tech-icons" />
          <div className="tech-icon-caption">Visual Studio Code</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <SiIntellijidea className="tech-icons" />
          <div className="tech-icon-caption">IntelliJ IDEA</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <FaAws className="tech-icons" />
          <div className="tech-icon-caption">AWS</div>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-container">
          <FaFigma className="tech-icons" />
          <div className="tech-icon-caption">Figma</div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
