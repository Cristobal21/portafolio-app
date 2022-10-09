import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import './navFolio.css'


const Navigation = () => {

  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="container-nav">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="button-toogle"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="navs">
            <Nav className="nav-links">
              <Link
                reloadDocument
                className={`nav1 animate__animated animate__fadeInDown nav-link`}
                to="#home">
                Inicio
              </Link>
              <Link
                reloadDocument
                className={`nav2 animate__animated animate__fadeInDown nav-link`}
                to="#about">
                Sobre Mí
              </Link>
              <Link
                reloadDocument
                className={`nav3 animate__animated animate__fadeInDown nav-link`}
                to="#skills">
                Conocimientos
              </Link>
              <Link
                reloadDocument
                className={`nav4 animate__animated animate__fadeInDown nav-link`}
                to="#courses">
                Cursos
              </Link>
              <Link
                reloadDocument
                className={`nav5 animate__animated animate__fadeInDown nav-link`}
                to="#projects">
                Proyectos
              </Link>
              <Link
                reloadDocument
                className={`nav6 animate__animated animate__fadeInDown nav-link`}
                to="#contact">
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation