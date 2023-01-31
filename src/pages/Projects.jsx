import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import * as imgs from "../assets"
import { CardProject, HeaderTitle, CardProjectSkill } from "../components"
import { getSkillProject } from "../helpers/getSkillProject"
import "./css/projects.css"

export const Projects = () => {
  const [showClima, setShowClima] = useState(true)
  const [showDeli, setShowDeli] = useState(true)
  const [showPort, setShowPort] = useState(true)

  const handleAppClima = () => {
    setShowClima(!showClima)
  }
  const handleAppDelivery = () => {
    setShowDeli(!showDeli)
  }
  const handleAppPort = () => {
    setShowPort(!showPort)
  }

  const {
    arrImgPort,
    nameSkillPort,
    arrImgClima,
    nameSkillClima,
    arrImgDeli,
    nameSkillDeli,
  } = getSkillProject()

  return (
    <Container className='container-projects' id='projects'>
      <Row className='row-header'>
        <HeaderTitle title='proyectos personales' />
      </Row>
      <Row className='rows-projects'>
        <div className='div-project'>
          {showPort ? (
            <CardProject
              title='Portafolio Web'
              description={`Mi propia web personal ha sido mi primer proyecto web que he desarrollado desde que he comenzado a estudiar`}
              img={imgs.app_portafolio1}
              handleApp={handleAppPort}
              classStyle='card-project'
            />
          ) : (
            <CardProjectSkill
              title='Tecnologías Aplicadas'
              handleApp={handleAppPort}
              imgs={arrImgPort}
              skill={nameSkillPort}
              classStyle='card-project'
              link='https://cristobal-valderrama.codes/'
            />
          )}
        </div>
        <div className='div-project'>
          {showClima ? (
            <>
              <CardProject
                title='Clima App'
                description={`Buscador que rescata información básica de ciudades y clima actual de dichos lugares, usando dos APIs diferentes.`}
                img={imgs.app_clima1}
                handleApp={handleAppClima}
                classStyle='card-project'
              />
            </>
          ) : (
            <>
              <CardProjectSkill
                title='Tecnologías Aplicadas'
                handleApp={handleAppClima}
                imgs={arrImgClima}
                skill={nameSkillClima}
                classStyle='card-project'
                link='https://weather-latino.netlify.app/'
              />
            </>
          )}
        </div>
        <div className='div-project'>
          {showDeli ? (
            <CardProject
              title='Despachos App - En desarrollo'
              description={`Formulario de registro para pedidos y despachos, conectado a base de datos MongoDB.`}
              img={imgs.app_pedido1}
              handleApp={handleAppDelivery}
              classStyle='card-project-pending'
              // link="https://weather-latino.netlify.app/"
            />
          ) : (
            <CardProjectSkill
              title='Tecnologías Aplicadas'
              handleApp={handleAppDelivery}
              imgs={arrImgDeli}
              skill={nameSkillDeli}
              classStyle='card-project-pending'
            />
          )}
        </div>
      </Row>
    </Container>
  )
}
