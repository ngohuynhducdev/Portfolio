import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movie from "../../Assets/Projects/movie.png";
import FordLogo from "../../Assets/Projects/FordLogo.png";
import MovieStar from "../../Assets/Projects/MovieStar.png";

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
              linkGitHub="https://github.com/ngohuynhducdev/MovieBooking"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FordLogo}
              title="Ford"
              description="Clone layout website Ford'"
              linkLive="https://layout-ford.vercel.app"
              linkGitHub="https://github.com/ngohuynhducdev/LayoutFord"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieStar}
              title="Movie Star"
              description="Clone layout website Movie Star"
              linkLive="https://movie-star-nine.vercel.app"
              linkGitHub="https://github.com/ngohuynhducdev/MovieStar"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
