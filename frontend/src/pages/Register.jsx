import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from "react-icons/fa"

function Register() {

  // Instead of having a different state for each input field, we only have one state for the whole form. This initial state will carry an object with a property and iniitial value of empty for each field.
  const [formData, setFormData] = useState({
    name: '123',
    email: '1',
    password: '1',
    password2: '123',
  })
  // To retrieve the property values of formData state we destructure it.
  const {name, email, password, password2} = formData
  // console.log(setFormData(prevState))

  const onChange = (e) => {
    // Usually we call setName, setEmail etc for each input. Since we only hace on formData state, we cann pass a function inside setFormData and that function carries prevState as a paramater which is just a name for a paramater that once passed inside any setState contains the previous state. 
    setFormData((prevState) => ({
      // We spread prevState to get the previous state of the 4 properties (key: value) for each input and then set each property to include the new value of each input. 
      ...prevState,
      // Since each input name property has a value that is the same to the setFormData properties we set that as the key with [e.target.name] and then the value to the new input value with [e.target.value].
      [e.target.name]: [e.target.value]
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
          {/* Name Input */}
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={name}
							placeholder="Enter your name"
							onChange={onChange}
						/>
					</div>
          {/* Email Input */}
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={onChange}
						/>
					</div>
          {/* Password Input */}
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={onChange}
						/>
					</div>
          {/* Password2 Input */}
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password2"
							name="password2"
							value={password2}
							placeholder="Confirm your password"
							onChange={onChange}
						/>
					</div>
          {/* Submit Button */}
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
				</form>
			</section>
		</>
	);
}

export default Register