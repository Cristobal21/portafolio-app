import { Card, Container, Row } from "react-bootstrap"
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si'
import './css/courses.css'

export const Courses = () => {
  return (
    <Container className="container-courses" id="courses">
      <Row className="mt-5 row-header animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
        <header>
          <h1>Licencias y Certificaciones</h1>
        </header>
        <hr />
      </Row>
      <Row className="container-row-course">
        <Row className="row-course">
          {/* <Col sm={12} md={12} lg={6} className="col-course"> */}
            <Card className="animate__animated animate__fadeInLeft animate__delay-1s animate__duration-1s">
              <Card.Body>
                <Card.Title><b>Javascript y ES6</b><SiJavascript /></Card.Title>
                <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Agustín Navarro Galdón</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Mayo 2022</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-576576ea-644d-4341-9a19-cf809512bdab</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.udemy.com/certificate/UC-576576ea-644d-4341-9a19-cf809512bdab/" target="_blank" >
                  Verificar Credencial
                </Card.Link>
              </Card.Footer>
            </Card>
          {/* </Col> */}
        </Row>
        <Row className="row-course">
          {/* <Col sm={12} md={12} lg={6} className="col-course"> */}
            <Card className="animate__animated animate__fadeInRight animate__delay-1s animate__duration-1s">
              <Card.Body>
                <Card.Title><b>React: De cero a experto (Hooks & MERN)</b><SiReact /></Card.Title>
                <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Fernando Herrera</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Abril 2022</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-925e05fb-d91b-417b-93fb-75119a1a19c2</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.udemy.com/certificate/UC-925e05fb-d91b-417b-93fb-75119a1a19c2/" target="_blank" >
                  Verificar Credencial
                </Card.Link>
              </Card.Footer>
            </Card>
          {/* </Col> */}
        </Row>
        <Row className="row-course">
          {/* <Col sm={12} md={12} lg={6} className="col-course"> */}
            <Card className="animate__animated animate__fadeInLeft animate__delay-1s animate__duration-1s">
              <Card.Body>
                <Card.Title><b>React: La guía definitiva</b><SiReact /></Card.Title>
                <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Nicolás Schurmann</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Abril 2022</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.udemy.com/certificate/UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/" target="_blank" >
                  Verificar Credencial
                </Card.Link>
              </Card.Footer>
            </Card>
          {/* </Col> */}
        </Row>
        <Row className="row-course">
          {/* <Col sm={12} md={12} lg={6} className="col-course"> */}
            <Card className="animate__animated animate__fadeInRight animate__delay-1s animate__duration-1s">
              <Card.Body>
                <Card.Title><b>Node: De cero a experto</b><SiNodedotjs /></Card.Title>
                <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Fernando Herrera</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Junio 2022</Card.Text>
                <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.udemy.com/certificate/UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7/" target="_blank" >
                  Verificar Credencial
                </Card.Link>
              </Card.Footer>
            </Card>
          {/* </Col> */}
        </Row>
      </Row>
    </Container>
  )
}
