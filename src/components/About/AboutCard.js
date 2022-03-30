import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ngo Huynh Duc </span>
            from <span className="purple"> Ho Chi Minh City.</span>
            <br />I graduated from college majoring in Software Engineering and
            also completed a course on Front-End Development at Cybersoft
            Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn About Technology Items
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel By Motorbike
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
