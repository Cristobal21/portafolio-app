import { Container, Row } from "react-bootstrap"
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si"
import { HeaderTitle, CardCourse } from "../components"
import "./css/courses.css"

export const Courses = () => {
  const logoJS = <SiJavascript />
  const logoReact = <SiReact />
  const logoNode = <SiNodedotjs />

  return (
    <Container id='courses' className='container-course'>
      <Row className='mt-5 row-header'>
        <HeaderTitle title='certificaciones' />
      </Row>
      <Row className='container-row-course'>
        <Row className='row-course'>
          <CardCourse
            title='Javascript y ES6'
            institution='Udemy Programming Academy'
            instructor='Agustín Navarro Galdón'
            date='Mayo 2022'
            credential='UC-576576ea-644d-4341-9a19-cf809512bdab'
            logo={logoJS}
            link='https://www.udemy.com/certificate/UC-576576ea-644d-4341-9a19-cf809512bdab/'
          />
          <CardCourse
            title='React: De cero a experto (Hooks & MERN)'
            institution='Udemy Programming Academy'
            instructor='Fernando Herrera'
            date='Abril 2022'
            credential='UC-925e05fb-d91b-417b-93fb-75119a1a19c2'
            logo={logoReact}
            link='https://www.udemy.com/certificate/UC-925e05fb-d91b-417b-93fb-75119a1a19c2/'
          />
          <CardCourse
            title='React: La guía definitiva'
            institution='Udemy Programming Academy'
            instructor='Nicolás Schurmann'
            date='Abril 2022'
            credential='UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/'
            logo={logoReact}
            link='https://www.udemy.com/certificate/UC-0103b0f6-ce87-49d1-ba48-4c2d40b913ac/'
          />
          <CardCourse
            title='Node: De cero a experto'
            institution='Udemy Programming Academy'
            instructor='Fernando Herrera'
            date='Junio 2022'
            credential='UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7'
            logo={logoNode}
            link='https://www.udemy.com/certificate/UC-0989a1ed-1551-4193-b4c8-a79817cb3ec7/'
          />
        </Row>
      </Row>
    </Container>
  )
}
