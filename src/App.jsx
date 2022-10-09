import { Container } from 'react-bootstrap'
import { About, Contact, Courses, Home, Projects, Skills } from './pages'
import Navigation from './ui/Navigation'
import './stylesApp.css'

const App = () => {

  return (
    <Container>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Courses />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
