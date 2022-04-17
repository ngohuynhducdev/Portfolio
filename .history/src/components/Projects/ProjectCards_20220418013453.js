import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        height="200px"
        width="full"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.linkLive} target="_blank">
          <BiLinkExternal /> &nbsp; Live
        </Button>

        <Button
          style={{ "margin-left": "10px" }}
          variant="primary"
          href={props.linkGitHub}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
