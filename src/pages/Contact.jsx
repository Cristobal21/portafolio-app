import { Container, Row } from "react-bootstrap"
import { ContactForm } from "../components/ContactForm"
import './css/contact.css'


export const Contact = () => {
  return (
    <Container className="container-contact" id="contact">
      <Row className="mt-5 row-header">
        <header>
          <h1>contáctame</h1>
        </header>
        <hr />
      </Row>
      <Row className="container-form">
        <ContactForm />
      </Row>
    </Container>
  )
}
