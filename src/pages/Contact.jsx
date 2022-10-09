import { Container, Row } from "react-bootstrap"
import { ContactForm } from "../components/ContactForm"
import './css/contact.css'


export const Contact = () => {
  return (
    <Container className="container-contact" id="contact">
      <Row className="mt-5 row-header animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
        <header>
          <h1>Contáctame</h1>
        </header>
        <hr />
      </Row>
      <Row className="container-form">
        <ContactForm />
      </Row>
    </Container>
  )
}
