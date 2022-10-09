import { Container, Row } from "react-bootstrap"
import { ButtonDownloadCV } from "../components/ButtonDownloadCV"
import './css/home.css'


export const Home = () => {
  return (
    <Container className="container-home" id="home">
      <Row>
        <header className="header-home animate__animated animate__fadeInUp animate__delay-0.5s">
          <h1>Cristóbal Valderrama</h1>
          <h3>Desarrollador Web</h3>
        </header>
      </Row>
      <Row>
        <ButtonDownloadCV />
      </Row>
    </Container>
  )
}
