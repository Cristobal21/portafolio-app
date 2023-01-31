import { Col, Container, Row } from "react-bootstrap"
import * as imgs from "../assets"
import { HeaderTitle } from "../components"
import { CardSkill } from "../components/CardSkill"
import { getSkills } from "../helpers/getSkills"

import "./css/skills.css"

export const Skills = () => {
  const {
    htmlSt,
    reactSt,
    cssSt,
    gitSt,
    nodeSt,
    javascriptSt,
    bstrapSt,
    twSt,
    mongoSt,
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
    enterTw,
    leaveTw,
    enterMongo,
    leaveMongo,
  } = getSkills()

  return (
    <Container className='container-skills' id='skills'>
      <Row className='mt-5 row-header'>
        <HeaderTitle title='conocimientos recientes' />
      </Row>
      <Row className='row-card-skill' xxl={6} xl={6} lg={5}>
        <Col className='col-skills'>
          <CardSkill
            link='https://developer.mozilla.org/es/docs/Glossary/HTML5'
            img1={imgs.html1}
            img2={imgs.html2}
            enterSkill={enterHtml}
            leaveSkill={leaveHtml}
            stateSkill={htmlSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://developer.mozilla.org/es/docs/Web/CSS'
            img1={imgs.css1}
            img2={imgs.css2}
            enterSkill={enterCss}
            leaveSkill={leaveCss}
            stateSkill={cssSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://git-scm.com/'
            img1={imgs.git1}
            img2={imgs.git2}
            enterSkill={enterGit}
            leaveSkill={leaveGit}
            stateSkill={gitSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://developer.mozilla.org/es/docs/Web/JavaScript'
            img1={imgs.js1}
            img2={imgs.js2}
            enterSkill={enterJs}
            leaveSkill={leaveJs}
            stateSkill={javascriptSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://reactjs.org/'
            img1={imgs.react1}
            img2={imgs.react2}
            enterSkill={enterReact}
            leaveSkill={leaveReact}
            stateSkill={reactSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://getbootstrap.com/'
            img1={imgs.bs1}
            img2={imgs.bs2}
            enterSkill={enterBs}
            leaveSkill={leaveBs}
            stateSkill={bstrapSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://nodejs.org/es/'
            img1={imgs.node1}
            img2={imgs.node2}
            enterSkill={enterNode}
            leaveSkill={leaveNode}
            stateSkill={nodeSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://tailwindcss.com/'
            img1={imgs.tw1}
            img2={imgs.tw2}
            enterSkill={enterTw}
            leaveSkill={leaveTw}
            stateSkill={twSt}
          />
        </Col>
        <Col className='col-skills'>
          <CardSkill
            link='https://www.mongodb.com/'
            img1={imgs.mongo1}
            img2={imgs.mongo2}
            enterSkill={enterMongo}
            leaveSkill={leaveMongo}
            stateSkill={mongoSt}
          />
        </Col>
      </Row>
    </Container>
  )
}
