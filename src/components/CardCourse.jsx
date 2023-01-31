import { Card } from "react-bootstrap"

export const CardCourse = ({
  title,
  institution,
  instructor,
  date,
  credential,
  logo,
  link,
}) => {
  return (
    <Card className='card-course'>
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
          {logo}
        </Card.Title>
        <Card.Text style={{ fontSize: "17px" }}>
          <b>Institución: </b>
          {institution}
        </Card.Text>
        <Card.Text style={{ fontSize: "17px" }}>
          <b>Instructor: </b>
          {instructor}
        </Card.Text>
        <Card.Text style={{ fontSize: "17px" }}>
          <b>Fecha: </b>
          {date}
        </Card.Text>
        <Card.Text style={{ fontSize: "17px" }}>
          <b>ID credencial: </b>
          {credential}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='cardFooterCourse'>
        <Card.Link href={link} target='_blank' className='cardCourseLink'>
          Verificar Credencial
        </Card.Link>
      </Card.Footer>
    </Card>
  )
}
