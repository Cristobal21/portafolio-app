import { Container, Row } from 'react-bootstrap'
import { About, Contact, Courses, Home, Projects, Skills } from './pages'
import Navigation from './ui/Navigation'
import './stylesApp.css'

const App = () => {

  return (
    <>
      <Navigation />
      <Container className='container-pages'>
        <Row className="rows-pages">
        <Home />
        </Row>
        <Row className="rows-pages">
        <About />
        </Row>
        <Row className="rows-pages">
        <Skills />
        </Row>
        <Row className="rows-pages">
        <Courses />
        </Row>
        <Row className="rows-pages">
        <Projects />
        </Row>
        <Row className="rows-pages">
        <Contact />
        </Row>
      </Container>
    </>
  )
}

export default App
