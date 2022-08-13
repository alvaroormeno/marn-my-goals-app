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

  const onChange = () => {

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