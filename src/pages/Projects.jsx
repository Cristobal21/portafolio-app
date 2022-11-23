// import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"
import ReactTooltip from 'react-tooltip'
import { getSkills } from "../helpers/getSkills"
import portafolio from '../assets/portafolio.png'
import * as imgs from '../assets'
import './css/projects.css'

export const Projects = () => {

  // const navigate = useNavigate()

  const {
    htmlSt,
    reactSt,
    cssSt,
    javascriptSt,
    bstrapSt,
    enterHtml,
    leaveHtml,
    enterCss,
    leaveCss,
    enterJs,
    leaveJs,
    enterReact,
    leaveReact,
    enterBs,
    leaveBs,
  } = getSkills()

  return (
    <Container className='container-projects' id="projects">
      <Row className="row-header">
        <header>
          <h1>proyectos personales</h1>
        </header>
        <hr />
      </Row>
      <Row className="rows-projects">
        <div className="col-project">
          <a href="#">
            <Card className="card-project">
              <Card.Header className="cardHeader-project">Portafolio Web</Card.Header>
              <Card.Img variant="top" src={portafolio} alt="portafolio" className="img-project" />
              <Card.Body>
                <Card.Text className="cardText-project">Mi propia web personal ha sido mi primer proyecto web que he desarrollado desde que he comenzado a estudiar.</Card.Text>
                <Card.Subtitle className="text-center">Tecnologías aplicadas</Card.Subtitle>
              </Card.Body>
              <Card.Footer className="cardFooter-project">
                <Col>
                  { !bstrapSt ? <img src={imgs.bs6} alt="imagen" className="imgFooter-project" data-tip data-for="bst" onMouseEnter={enterBs} onMouseLeave={leaveBs}/> : <img src={imgs.bs3} alt="imagen" className="imgFooter-project" data-tip data-for="bst" onMouseEnter={enterBs} onMouseLeave={leaveBs}/>}
                  <ReactTooltip id="bst" place="bottom" effect="solid" backgroundColor="#FF0080">
                    Bootstrap
                  </ReactTooltip>
                </Col>
                <Col>
                  { !cssSt ? <img src={imgs.css6} alt="imagen" className="imgFooter-project" data-tip data-for="css" onMouseEnter={enterCss} onMouseLeave={leaveCss}/> : <img src={imgs.css3} alt="imagen" className="imgFooter-project" data-tip data-for="css" onMouseEnter={enterCss} onMouseLeave={leaveCss}/>}
                  <ReactTooltip id="css" place="bottom" effect="solid" backgroundColor="#FF0080">
                    Css
                  </ReactTooltip>
                </Col>
                <Col>
                  { !htmlSt ? <img src={imgs.html6} alt="imagen" className="imgFooter-project" data-tip data-for="html" onMouseEnter={enterHtml} onMouseLeave={leaveHtml}/> : <img src={imgs.html3} alt="imagen" className="imgFooter-project" data-tip data-for="html" onMouseEnter={enterHtml} onMouseLeave={leaveHtml}/>}
                  <ReactTooltip id="html" place="bottom" effect="solid" backgroundColor="#FF0080">
                    Html
                  </ReactTooltip>
                </Col>
                <Col>
                  { !reactSt ? <img src={imgs.react6} alt="imagen" className="imgFooter-project" data-tip data-for="react" onMouseEnter={enterReact} onMouseLeave={leaveReact}/> : <img src={imgs.react3} alt="imagen" className="imgFooter-project" data-tip data-for="react" onMouseEnter={enterReact} onMouseLeave={leaveReact}/> }
                  <ReactTooltip id="react" place="bottom" effect="solid" backgroundColor="#FF0080">
                    React js
                  </ReactTooltip>
                </Col>
                <Col>
                  { !javascriptSt ? <img src={imgs.js6} alt="imagen" className="imgFooter-project" data-tip data-for="js" onMouseEnter={enterJs} onMouseLeave={leaveJs}/> : <img src={imgs.js3} alt="imagen" className="imgFooter-project" data-tip data-for="js" onMouseEnter={enterJs} onMouseLeave={leaveJs}/> }
                  <ReactTooltip id="js" place="bottom" effect="solid" backgroundColor="#FF0080">
                    Javascript
                  </ReactTooltip>
                </Col>
              </Card.Footer>
            </Card>
          </a>
        </div>
      </Row>
    </Container>
  )
}
