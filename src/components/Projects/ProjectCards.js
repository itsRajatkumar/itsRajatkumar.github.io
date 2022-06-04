import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" className="card_img" src={props.imgPath} alt="card-img" />
      <Card.Body className="project_card">
        <div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        </div>
        <div className="project_card-link">

        <>
        {
          props.deployed ?<>
          <Button variant="primary" href={props.code_link} target="_blank">
            <BiLinkExternal /> &nbsp;
            View Code
          </Button>
           <Button variant="primary" href={props.deploy_link} target="_blank">
          <BiLinkExternal /> &nbsp; View Project
        </Button>
        </> :   <Button variant="primary" href={props.code_link} target="_blank">
                  <BiLinkExternal /> &nbsp;
                  View Code
                </Button>
        }
        </>


        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
