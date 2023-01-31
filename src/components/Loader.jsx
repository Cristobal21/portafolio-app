import { Container } from "react-bootstrap"
import "./css/loader.css"

export const Loader = () => {
  return (
    <>
      <Container className='container-loader'>
        <span className='loader'></span>
      </Container>
    </>
  )
}
