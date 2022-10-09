import { Alert, Button, FloatingLabel, Form } from "react-bootstrap"
import { BsCheckCircleFill } from "react-icons/bs"
import { useForm } from "../hooks/useForm"
import { Loader } from "./Loader"

const initialForm = {
  nombre: "",
  correo: "",
  mensaje: ""
}

const validationsForm = (form) => {

  let errors = {}

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,40}$/
  let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  let regexMessage = /^.{1,300}$/

  if (!form.nombre.trim()) {
    errors.nombre = "El campo nombre es requerido"
  } else if( !regexName.test(form.nombre.trim()) ){
    errors.nombre = "El campo nombre solo acepta letras y espacios"
  }

  if( !form.correo.trim() ){
    errors.correo = "El campo correo es requerido"
  } else if( !regexEmail.test(form.correo.trim()) ){
    errors.correo = "El correo es incorrecto"
  }

  if( !form.mensaje.trim() ){
    errors.mensaje = "El campo mensaje es requerido"
  } else if( !regexMessage.test(form.mensaje.trim()) ){
    errors.mensaje = "El mensaje solo acepta hasta 300 caracteres"
  }

  return errors
}

export const ContactForm = () => {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm)


  return (
    <>
      <Form className="form-contact" onSubmit={handleSubmit} id="myForm">
        <Form.Group className="animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
          <FloatingLabel
            controlId="floatinLabelNombre"
            label="Tu nombre"
          >
            <Form.Control
              type="text"
              name="nombre"
              size="lg"
              placeholder="Escribe tu nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.nombre}
              required
            />
          </FloatingLabel>
          {errors.nombre && <div className="alerta-error">{errors.nombre}</div>}
        </Form.Group>
        <Form.Group className="animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
          <FloatingLabel
            controlId="floatinLabelEmail"
            label="Tu correo"
          >
            <Form.Control
              type="email"
              name="correo"
              size="lg"
              placeholder="Escribe tu correo"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.correo}
              required
            />
          </FloatingLabel>
          {errors.correo && <div className="alerta-error">{errors.correo}</div>}
        </Form.Group>
        <Form.Group controlId="contact.ControlTextarea" className="animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s">
          <FloatingLabel
            controlId="floatingTextArea"
            label="Escribe tu mensaje aquí..."
          >
            <Form.Control
              as="textarea"
              name="mensaje"
              size="lg"
              style={{ height: '130px' }}
              placeholder="Escribe tu mensaje"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.mensaje}
              required
            />
          </FloatingLabel>
          {errors.mensaje && <div className="alerta-error">{errors.mensaje}</div>}
        </Form.Group>
        <Button type="submit" size="lg" className="button-submit-contact animate__animated animate__zoomIn animate__delay-0.5s animate__duration-2s">Enviar</Button>
        { loading && <Loader /> }
        { response && <Alert variant="success" className="animate__animated animate__zoomIn animate__delay-0.5s animate__duration-1s"><BsCheckCircleFill /> Mensaje enviado exitosamente</Alert>}
      </Form>
    </>
  )
}