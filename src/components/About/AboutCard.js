import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajat Kumar Prajapati </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />I am pursuing B.Tech in Computer Science Engineering in GITS
            Udaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          If you want to shine like a sun, first burn like a sun.{" "}
          </p>
          <footer className="blockquote-footer">Dr. APJ Abdul Kalam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
