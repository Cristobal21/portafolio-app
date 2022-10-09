import { Container, Row, Card, Col, ListGroup } from "react-bootstrap"
import cristobal from '../assets/cris.png'
import './css/info.css'
import './css/about.css'


export const About = () => {
  return (
    <Container className="container-about" id="about">
      <Row className="row-header animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
        <header>
          <h1>¿Quién es este tipo?</h1>
        </header>
        <hr />
      </Row>
      <Row className="row-text ">
        <Col sm={12} lg={3} className="col-text">
          <Card border="dark" style={{ width: '100%' }} className="card-1 animate__animated animate__fadeInDown animate__delay-0.5s">
            <Card.Body>
              <Card.Text>
                Soy una persona dedicada, comprometida y leal. Organizado y responsable con mis tareas. Mi objetivo a corto y largo plazo es seguir creciendo como desarrollador web.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="dark" style={{ width: '100%' }} className="card-2 animate__animated animate__fadeInLeft animate__delay-0.5s">
            <Card.Header>Info</Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="list-item">Edad: 26 años</ListGroup.Item>
                <ListGroup.Item className="list-item">Nacionalidad: Chile</ListGroup.Item>
                <ListGroup.Item className="list-item">Raza: Sajajín</ListGroup.Item>
                <ListGroup.Item className="list-item">Apodo: Tobal</ListGroup.Item>
                <ListGroup.Item className="list-item">Os: Linux - Fedora</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={3} className="col-img">
          <Card border="dark" className="card-img animate__animated animate__fadeInRight animate__delay-0.5s" style={{ width: '100%' }}>
            <Card.Img variant="top" src={cristobal} alt="Cristobal-Valderrama" />
            <Card.Body className="card-body-img">
              <Card.Text>Este soy yo ✌</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} className="col-perfil">
          <Card border="dark" className="animate__animated animate__fadeInUp animate__delay-0.5s">
            <Card.Header>Un poco más de mi</Card.Header>
            <Card.Body className="card-body-perfil">
              <Card.Text>
                Nacido y criado desde 1995 hasta la fecha en Chile.
                El 2018 me titulé de la carrera Analista Programador Computacional
                del Instituto Técnico Profesional Duoc UC, pero no fue hasta el 2022
                que mi interés y la pasión por el desarrollo web comenzó.
                Desde entonces me he dedicado a estudiar de manera autodidacta todo lo que pudiera tener relación al desarrollo web.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
