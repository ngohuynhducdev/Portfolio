import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiJavascript1, DiReact, DiGit, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiMaterialui,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
  SiMicrosoftoffice,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineAntDesign />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
    </Row>
  );
}

export default Techstack;
