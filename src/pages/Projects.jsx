import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"
import portafolio from '../assets/portafolio.png'
import * as imgs from '../assets'
import './css/projects.css'

export const Projects = () => {

  const navigate = useNavigate()

  const enterProject = () => {
    const cardProject = document.querySelector('.card-project')
    cardProject.style.border = '2px solid #FF0080'
  }
  const leaveProject = () => {
    const cardProject = document.querySelector('.card-project')
    cardProject.style.border = "2px solid #0A2D41"
  }

  return (
    <Container className='container-projects' id="projects">
      <Row className="row-header">
        <header>
          <h1>proyectos personales</h1>
        </header>
        <hr />
      </Row>
      <Row className="rows-projects">
        <Col md={6} lg={12} className="col-project">
          <a href="#" target="_blank">
            <Card className="card-project">
              <Card.Header className="cardHeader-project">Portafolio Web</Card.Header>
              <Card.Img variant="top" src={portafolio} alt="portafolio" className="img-project" />
              <Card.Footer className="cardFooter-project" onMouseEnter={enterProject} onMouseLeave={leaveProject}>
                <Col><img src={imgs.bs3} alt="imagen" clasName="imgFooter-project" /></Col>
                <Col><img src={imgs.css3} alt="imagen" clasName="imgFooter-project" /></Col>
                <Col><img src={imgs.html3} alt="imagen" clasName="imgFooter-project" /></Col>
                <Col><img src={imgs.react3} alt="imagen" clasName="imgFooter-project" /></Col>
                <Col><img src={imgs.js3} alt="imagen" clasName="imgFooter-project" /></Col>
              </Card.Footer>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
