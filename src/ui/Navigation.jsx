import { useState } from "react"
import { Card, Col, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as imgs from "../assets/"
import "./navFolio.css"

const Navigation = () => {
  const [linkedin, setLinkedin] = useState(false)

  const enterLkdin = () => {
    setLinkedin(true)
    let cardLkdin = document.querySelector("#lkdin")
    cardLkdin.style.transform = "scale(1.1)"
    cardLkdin.style.transitionDuration = "0.5s"
  }
  const leaveLkdin = () => {
    setLinkedin(false)
    let cardLkdin = document.querySelector("#lkdin")
    cardLkdin.style.transform = "scale(1)"
    cardLkdin.style.transitionDuration = "0.5s"
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky='top'
        expand='lg'
        variant='dark'
        className='container-nav'
      >
        <Container>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='button-toogle'
          />
          <Navbar.Collapse id='responsive-navbar-nav' className='navs'>
            <Col lg={12} className='col-navbar'>
              <Nav className='nav-links'>
                <Link
                  reloadDocument
                  className={`nav1 animate__animated animate__fadeInDown nav-link`}
                  to='#home'
                >
                  Inicio
                </Link>
                <Link
                  reloadDocument
                  className={`nav2 animate__animated animate__fadeInDown nav-link`}
                  to='#about'
                >
                  Sobre Mí
                </Link>
                <Link
                  reloadDocument
                  className={`nav3 animate__animated animate__fadeInDown nav-link`}
                  to='#projects'
                >
                  Proyectos
                </Link>
                <Link
                  reloadDocument
                  className={`nav4 animate__animated animate__fadeInDown nav-link`}
                  to='#courses'
                >
                  Cursos
                </Link>
                <Link
                  reloadDocument
                  className={`nav5 animate__animated animate__fadeInDown nav-link`}
                  to='#skills'
                >
                  Conocimientos
                </Link>
                <Link
                  reloadDocument
                  className={`nav6 animate__animated animate__fadeInDown nav-link`}
                  to='#contact'
                >
                  Contacto
                </Link>
                <Link
                  reloadDocument
                  className={`nav7 animate__animated animate__fadeInDown nav-link`}
                  to='https://www.linkedin.com/in/crist%C3%B3bal-valderrama-contreras-176275100/'
                >
                  LinkedIn
                </Link>
              </Nav>
              <Card
                className='card-lkdin'
                id='lkdin'
                onMouseEnter={enterLkdin}
                onMouseLeave={leaveLkdin}
              >
                <a
                  href='https://www.linkedin.com/in/crist%C3%B3bal-valderrama-contreras-176275100/'
                  target='_blank'
                  id='link-Lkdin'
                >
                  {!linkedin ? (
                    <Card.Img variant='top' id='imgLkdin' src={imgs.lkdin1} />
                  ) : (
                    <Card.Img variant='top' id='imgLkdin' src={imgs.lkdin2} />
                  )}
                </a>
              </Card>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
