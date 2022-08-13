import React from 'react'
import {useState, useEffect} from 'react'

function Register() {

  // Instead of having a different state for each input field, we only have one state for the whole form. This initial state will carry an object with a property and iniitial value of empty for each field.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  // To retrieve the property values of formData state we destructure it.
  const {name, email, password, password2} = formData

  return (
    <div>Register</div>
  )
}

export default Register