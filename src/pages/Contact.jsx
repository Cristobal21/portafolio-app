import { Container, Row } from "react-bootstrap"
import { ContactForm } from "../components/ContactForm"
import { HeaderTitle } from "../components/HeaderTitle"
import "./css/contact.css"

export const Contact = () => {
  return (
    <Container className='container-contact' id='contact'>
      <Row className='mt-5 row-header'>
        <HeaderTitle title='contáctame' />
      </Row>
      <Row className='container-form'>
        <ContactForm />
      </Row>
    </Container>
  )
}
