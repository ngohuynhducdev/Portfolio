import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movie from "../../Assets/Projects/movie.png";
import bauCua from "../../Assets/Projects/bauCua.png";
import grabCar from "../../Assets/Projects/grabCar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="Movie Booking"
              description="A website that allows users to view movie showtimes, watch movie information, and book movie tickets"
              linkLive="https://movie-booking-khaki.vercel.app"
              linkGitHub="https://zingnews.vn/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bauCua}
              title="Game 'Bau Cua'"
              description="A mini application that simulates the folk game 'Bau Cua'"
              linkLive="https://bau-cua-fawn.vercel.app"
              linkGitHub="https://zingnews.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grabCar}
              title="Grabcar Fare Calculator"
              description="Carry out Grabcar fare calculation"
              linkLive="https://bc-11-tinh-tien-grab-ngo-huynh-duc.vercel.app"
              linkGitHub="https://zingnews.vn/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
