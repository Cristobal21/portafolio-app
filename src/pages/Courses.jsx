import { Card, Container, Row } from "react-bootstrap"
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si'
import './css/courses.css'

export const Courses = () => {

  const enterFooter1 = () => {
    let footer1 = document.querySelector('#cardFooter1')
    footer1.style.color = '#FFFFFF'
  }
  const leaveFooter1 = () => {
    let footer1 = document.querySelector('#cardFooter1')
    footer1.style.color = '#00FFFF'
  }

  const enterFooter2 = () => {
    let footer2 = document.querySelector('#cardFooter2')
    footer2.style.color = '#FFFFFF'
  }
  const leaveFooter2 = () => {
    let footer2 = document.querySelector('#cardFooter2')
    footer2.style.color = '#00FFFF'
  }

  const enterFooter3 = () => {
    let footer3 = document.querySelector('#cardFooter3')
    footer3.style.color = '#FFFFFF'
  }
  const leaveFooter3 = () => {
    let footer3 = document.querySelector('#cardFooter3')
    footer3.style.color = '#00FFFF'
  }

  const enterFooter4 = () => {
    let footer4 = document.querySelector('#cardFooter4')
    footer4.style.color = '#FFFFFF'
  }
  const leaveFooter4 = () => {
    let footer4 = document.querySelector('#cardFooter4')
    footer4.style.color = '#00FFFF'
  }


  return (
    <Container id="courses" className="container-course">
      <Row className="mt-5 row-header">
        <header>
          <h1>licencias y certificaciones</h1>
        </header>
        <hr />
      </Row>
      <Row className="container-row-course">
        <Row className="row-course">
          <Card className="card-course">
            <Card.Body>
              <Card.Title><b>Javascript y ES6</b><SiJavascript /></Card.Title>
              <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Agustín Navarro Galdón</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Mayo 2022</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-576576ea-644d-4341-9a19-cf809512bdab</Card.Text>
            </Card.Body>
            <Card.Footer onMouseEnter={enterFooter1} onMouseLeave={leaveFooter1}>
              <Card.Link id="cardFooter1" href="https://www.udemy.com/certificate/UC-576576ea-644d-4341-9a19-cf809512bdab/" target="_blank" >
                Verificar Credencial
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card-course">
            <Card.Body>
              <Card.Title><b>React: De cero a experto (Hooks & MERN)</b><SiReact /></Card.Title>
              <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Fernando Herrera</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Abril 2022</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-925e05fb-d91b-417b-93fb-75119a1a19c2</Card.Text>
            </Card.Body>
            <Card.Footer onMouseEnter={enterFooter2} onMouseLeave={leaveFooter2}>
              <Card.Link id="cardFooter2" href="https://www.udemy.com/certificate/UC-925e05fb-d91b-417b-93fb-75119a1a19c2/" target="_blank" >
                Verificar Credencial
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card-course">
            <Card.Body>
              <Card.Title><b>React: La guía definitiva</b><SiReact /></Card.Title>
              <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Nicolás Schurmann</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Abril 2022</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/</Card.Text>
            </Card.Body>
            <Card.Footer onMouseEnter={enterFooter3} onMouseLeave={leaveFooter3}>
              <Card.Link id="cardFooter3" href="https://www.udemy.com/certificate/UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/" target="_blank" >
                Verificar Credencial
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card-course">
            <Card.Body>
              <Card.Title><b>Node: De cero a experto</b><SiNodedotjs /></Card.Title>
              <Card.Text style={{ fontSize: "17px" }}><b>Institución:</b> Udemy Online Courses</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Instructor:</b> Fernando Herrera</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>Fecha:</b> Junio 2022</Card.Text>
              <Card.Text style={{ fontSize: "17px" }}><b>ID credencial:</b> UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7</Card.Text>
            </Card.Body>
            <Card.Footer onMouseEnter={enterFooter4} onMouseLeave={leaveFooter4}>
              <Card.Link id="cardFooter4" href="https://www.udemy.com/certificate/UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7/" target="_blank" >
                Verificar Credencial
              </Card.Link>
            </Card.Footer>
          </Card>
        </Row> 
      </Row>
    </Container>
  )
}
