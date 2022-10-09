import { Card, Col, Container, Row } from "react-bootstrap"
import react from '../assets/react.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import node from '../assets/node.svg'
import bootstrap from '../assets/bootstrap.svg'
import javascript from '../assets/javascript.svg'
import git from '../assets/git.svg'

import './css/skills.css'


export const Skills = () => {
  return (
    <Container className="container-skills" id="skills">
      <Row className="mt-5 row-header animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
        <header>
          <h1>Conocimientos recientes</h1>
        </header>
        <hr />
      </Row>
      <Row className="row-card-skill">
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank">
              <Card.Img variant="top" src={html} />
              <Card.Footer>Html</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
              <Card.Img variant="top" src={css} />
              <Card.Footer>Css</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://git-scm.com/" target="_blank">
              <Card.Img variant="top" src={git} />
              <Card.Footer>Git</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
              <Card.Img variant="top" src={javascript} />
              <Card.Footer>Javascript</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://reactjs.org/" target="_blank">
              <Card.Img variant="top" src={react} />
              <Card.Footer>React JS</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://getbootstrap.com/" target="_blank">
              <Card.Img variant="top" src={bootstrap} />
              <Card.Footer>Bootstrap</Card.Footer>
            </a>
          </Card>
        </Col>
        <Col className="col-skills animate__animated animate__zoomIn animate__delay-1s">
          <Card className="card-skill">
            <a href="https://nodejs.org/es/" target="_blank">
              <Card.Img variant="top" src={node} />
              <Card.Footer>Node JS</Card.Footer>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
