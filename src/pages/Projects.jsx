import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import * as imgs from '../assets'
import './css/projects.css'

export const Projects = () => {

  // const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const showDetail = () => {
    setShow(true)
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
        <div className="div-project">
          <Card className="card-project">
            <Card.Header className="cardHeader-project">Portafolio Web</Card.Header>
            <Card.Img variant="top" src={imgs.app_portafolio} alt="portafolio" className="img-project" />
            <Card.Body>
              <Card.Text className="cardText-project">Mi propia web personal ha sido mi primer proyecto web que he desarrollado desde que he comenzado a estudiar.</Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter-project">
              <Card.Text onClick={showDetail} className="cardTextFooter-project">Ver más <IoIosArrowDropdownCircle/></Card.Text>
            </Card.Footer>
          </Card>
          {show ?
            <Card className="card-project animate__animated animate__zoomIn">
              <Card.Header className="cardHeader-project">Tecnologías aplicadas</Card.Header>
              <Card.Body>
                <ListGroup variant="flush" className="listgroup-project">
                  <ListGroup.Item>
                    <img src={imgs.bs3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" />
                    Bootstrap
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img src={imgs.html3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" />
                    Html
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img src={imgs.css3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" />
                    Css
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img src={imgs.react3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" />
                    React
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img src={imgs.js3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" />
                    Javascript
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            : <></>}
        </div>
        <div className="div-project">
          <Card className="card-project-pending">
            <Card.Header className="cardHeader-project">App del Clima - En Desarrollo</Card.Header>
            <Card.Img variant="top" src={imgs.app_clima} alt="portafolio" className="img-project" />
            <Card.Body>
              <Card.Text className="cardText-project">Buscador que rescata información de lugares y clima actual de dichos lugares, usando dos APIs diferentes.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  )
}
