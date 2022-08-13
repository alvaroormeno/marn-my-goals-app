import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from "react-icons/fa"

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
    <>
    <section className='heading'>
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      <form>
        <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
      </form>
    </section>
    </>
  )
}

export default Register