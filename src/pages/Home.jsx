import { Container, Row } from "react-bootstrap"
import { ButtonDownloadCV } from "../components/ButtonDownloadCV"
import './css/home.css'


export const Home = () => {
  return (
    <Container className="container-home" id="home">
      <Row>
        <header className="header-home animate__animated animate__fadeInUp animate__delay-0.5s">
          <h1>cristobal</h1>
          <h1>Valderrama</h1>
          <h3>desarrollador Web</h3>
        </header>
      </Row>
      <div className="rectangle-home animate__animated animate__zoomIn animate__delay-1s"></div>
      <Row>
        <ButtonDownloadCV />
      </Row>
      <hr />
    </Container>
  )
}
