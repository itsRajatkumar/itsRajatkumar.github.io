import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auth_app from "../../Assets/Projects/auth-app.png";
import Portfolio from "../../Assets/Projects/portfolio.PNG";
import todos from "../../Assets/Projects/todos.PNG";
import food_web from "../../Assets/Projects/food-web.PNG";
import web_scrap from "../../Assets/Projects/web_scrap.png";
import telegram_bot from "../../Assets/Projects/telegram_bot.jpg";
import MusicHub from "../../Assets/Projects/music-hub.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";


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
              imgPath={auth_app}
              deployed={true}
              title="Auth-App"
              description="A authentication application build with react.js, Nodejs, Express, and MongoDB. Have features which allows user for Signup Login, and varify the User using Email."
              code_link="https://github.com/itsRajatkumar/MERN-Auth-email-verify"
              deploy_link="https://auth-aap.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              deployed={true}
              title="Portfolio Website"
              description="Personal Poerfolio website build with Pure HTML CSS and JavaScript. Have Good design. and responsive to the device screen width."
              code_link="https://github.com/itsRajatkumar/Portfolio-HTML-CSS-JS"
              deploy_link="http://rajatkumar.tech/Portfolio-HTML-CSS-JS/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todos}
              deployed={true}
              title="ToDo List"
              description="A ToDo List website build with ReactJS and BootStrape. Have Good design. and responsive to the device screen width. store all todos locally."
              code_link="https://github.com/itsRajatkumar/Todolist"
              deploy_link="http://todos.rajatkumar.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_web}
              deployed={true}
              title="Food Recipe Website"
              description="A ToDo List website build with ReactJS and BootStrape. Have Good design. and responsive to the device screen width. store all todos locally."
              code_link="https://github.com/itsRajatkumar/GetMealRecipe"
              deploy_link="http://rajatkumar.tech/GetMealRecipe"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web_scrap}
              deployed={false}
              title="WebScraper using python"
              description="A python Based tool capable to scrape data from a website. Scrapped information stored in CSV file."
              code_link="https://github.com/itsRajatkumar/PythonWebScraper"
              deploy_link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telegram_bot}
              deployed={false}
              title="TeleGram Bot"
              description="A simple python based telegram bot that accept sum predefined commands and give output of that command."
              code_link="https://github.com/itsRajatkumar/TelegramBot"
              deploy_link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicHub}
              deployed={true}
              title="Music Player"
              description="Music Player make using pure HTML, CSS and JavaScript. that can play 8 panjabi Music. Have Good design. and responsive to the device screen width."
              code_link="https://github.com/itsRajatkumar/MusicHub"
              deploy_link="http://rajatkumar.tech/MusicHub"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              deployed={true}
              title="Tic Tac Toe"
              description="Simple tic tac toe game. Have Good design. and responsive to the device screen width."
              code_link="https://github.com/itsRajatkumar/tictactoe"
              deploy_link="http://rajatkumar.tech/tictactoe"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
