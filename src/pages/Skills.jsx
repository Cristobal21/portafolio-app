import { Card, Col, Container, Row } from "react-bootstrap"
import * as imgs from '../assets'
import { getSkills } from "../helpers/getSkills"

import './css/skills.css'


export const Skills = () => {

  const {
    htmlSt,
    reactSt,
    cssSt,
    gitSt,
    nodeSt,
    javascriptSt,
    bstrapSt,
    enterHtml,
    leaveHtml,
    enterCss,
    leaveCss,
    enterGit,
    leaveGit,
    enterJs,
    leaveJs,
    enterReact,
    leaveReact,
    enterBs,
    leaveBs,
    enterNode,
    leaveNode,
  } = getSkills()

  return (
    <Container className="container-skills" id="skills">
      <Row className="mt-5 row-header">
        <header>
          <h1>conocimientos recientes</h1>
        </header>
        <hr />
      </Row>
      <Row className="row-card-skill">
        <Col className="col-skills">
          <Card className="card-skill" id="html" onMouseEnter={enterHtml} onMouseLeave={leaveHtml}>
            <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank">
              {!htmlSt ? <Card.Img variant="top" src={imgs.html1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.html2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterCss} onMouseLeave={leaveCss}>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
              {!cssSt ? <Card.Img variant="top" src={imgs.css1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.css2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterGit} onMouseLeave={leaveGit}>
            <a href="https://git-scm.com/" target="_blank">
              {!gitSt ? <Card.Img variant="top" src={imgs.git1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.git2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterJs} onMouseLeave={leaveJs}>
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
              {!javascriptSt ? <Card.Img variant="top" src={imgs.js1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.js2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterReact} onMouseLeave={leaveReact}>
            <a href="https://reactjs.org/" target="_blank">
              {!reactSt ? <Card.Img variant="top" src={imgs.react1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.react2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterBs} onMouseLeave={leaveBs}>
            <a href="https://getbootstrap.com/" target="_blank">
              {!bstrapSt ? <Card.Img variant="top" src={imgs.bs1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.bs2} />}
            </a>
          </Card>
        </Col>
        <Col className="col-skills">
          <Card className="card-skill" onMouseEnter={enterNode} onMouseLeave={leaveNode}>
            <a href="https://nodejs.org/es/" target="_blank">
              {!nodeSt ? <Card.Img variant="top" src={imgs.node1} /> : <Card.Img variant="top" id="imgSkill" src={imgs.node2} />}
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
