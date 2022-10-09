import { useState } from "react"


export const useForm = (initialForm, validateForm) => {

  const [form, setForm] = useState(initialForm)  
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const myForm = document.getElementById("myForm")
   
  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(form))

    if(Object.keys(errors).length === 0){
      setLoading(true)
      emailjs.sendForm('service_pfw9n8g', 'template_vkya4cx', myForm)
        .then(res => {
          console.log(res)
          setLoading(false)
          setResponse(true)
          setForm(initialForm)
          setTimeout(() => setResponse(false), 4000)
        })
        .catch(err => console.log(err))
    }else {
      return
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }

}
