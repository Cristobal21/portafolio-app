import { Container, Row, Card, Col, ListGroup } from "react-bootstrap"
import { AiFillCaretRight } from 'react-icons/ai'
import cristobal from '../assets/cris.png'
import './css/info.css'
import './css/about.css'


export const About = () => {

  const enterCardInfo = () => {
    const info = document.querySelector('.card-info')
    info.style.transform = 'scale(1.02)'
    info.style.transition = '0.8s'
  }
  const leaveCardInfo = () => {
    const info = document.querySelector('.card-info')
    info.style.transform = 'scale(1.0)'
  }

  const enterCardImg = () => {
    const img = document.querySelector('.card-img')
    img.style.transform = 'scale(1.02)'
    img.style.transition = '0.8s'
  }
  const leaveCardImg = () => {
    const img = document.querySelector('.card-img')
    img.style.transform = 'scale(1.0)'
  }

  

  return (
    <Container className="container-about" id="about">
      <Row className="row-header">
        <header>
          <h1>¿quién es este tipo?</h1>
        </header>
        <hr />
      </Row>
      <Row className="row-text">
        <Col sm={12}  lg={6} xl={6} className="col-text">
          <Card border="dark" className="card-info" onMouseEnter={enterCardInfo} onMouseLeave={leaveCardInfo}>
            <Card.Header className="cardHeader-info"><AiFillCaretRight/>Un poco sobre mí</Card.Header>
            <Card.Body className="cardBody-info">
              <ListGroup className="list-group-flush item-group">
                <ListGroup.Item className="list-item item-list">Nacido y criado en Chile desde 1995, hasta la fecha.</ListGroup.Item>
                <ListGroup.Item className="list-item item-list">
                  El 2018 me titulé de la carrera Analista Programador Computacional, pero fue a inicios del año 2022 que mi interés y pasión por el desarrollo web comenzó.
                </ListGroup.Item>
                <ListGroup.Item className="list-item item-list">
                  Desde entonces me he dedicado a estudiar de manera autodidacta todo lo que pudiera tener relación al desarrollo web, con un fuerte enfoque en el Front-end.
                </ListGroup.Item>
                <ListGroup.Item className="list-item item-list">
                  En un mundo donde la tecnología crece a pasos agigantados, donde la era digital es la que predomina por sobre todo, ahí, en algún punto estoy yo,
                  con ansias de poder utilizar mis conocimientos y habilidades para crear contenido digital que sirva de aporte para el mundo y rubro de la tecnología.
                </ListGroup.Item>
                <ListGroup.Item className="list-item item-list">
                  Creo firmemente en la idea de que todos deberíamos saber programar, ya que ser desarrollador web, es una de las mejores cosas del mundo.
                </ListGroup.Item>
                {/* <ListGroup.Item className="list-item item-list">Creo firmemente en la idea de que todos deberíamos saber programar, ya que ser desarrollador web, es una de las mejores cosas del mundo.
                Es por eso que me fascina la idea de poder crear contenido web que sea de facil acceso y uso para todo tipo de personas de todas las edades posibles, con la esperanza de poder generar motivación en los demás y así despertar su interés por la programación.</ListGroup.Item> */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}  lg={6} xl={4} className="col-img">
          <Card border="dark" className="card-img" onMouseEnter={enterCardImg} onMouseLeave={leaveCardImg} style={{ width: '100%' }}>
            <Card.Img variant="top" src={cristobal} alt="Cristobal-Valderrama" />
            <Card.Body className="card-body-img">
              <Card.Text>Este soy yo ✌</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
