import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Steven Zhao.</span>
            <br />
            <br />
            I am an experienced software engineer with a comprehensive
            background in full-stack development. I am adept at working in
            cross-functional teams and collaborating with stakeholders to
            deliver projects on time and within budget.
            <br />
            <br />
            Beyond software, my experience extends to hardware system
            integration, product diagnostics and technical support.
            <br />
            <br />I am committed to best practices in development, emphasizing
            code quality, scalability, and security. Keen on evolving
            technologies, I continually upgrade my skill set. My agility in
            adapting to dynamic environments enables me to handle multiple
            priorities under tight deadlines effectively.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
