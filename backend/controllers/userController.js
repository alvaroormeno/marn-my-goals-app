// Import jwt for webtokens
const jwt = require('jsonwebtoken')
// Import bcrypt to hash passwords
const bcrypt = require('bcryptjs')
const asynchHandler = require('express-async-handler')
const User = require('../models/userModel.js')


// DESCRIPTION - Register a user
// ROUTE - POST /api/users
// ACCESS - Public
const registerUser = asynchHandler( async (req, res) => {

  // Destructure body data from the request body
  const {name, email, password} = req.body
  // Check if the request body contains name, email and password of registering user. If not, throw an error.
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // Check if user exists byt using the User model and the fineOne method which we pass email from the request body. 
  const userExists = await User.findOne({email})
  // If a user with a same email exists throw an error
  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  // We need to generate a salt to hash password. We do this by calling a bcrypt method of genSalt() which takes a number of rounds.
  const salt = await bcrypt.genSalt(10)
  // Hash the password by using the bcrypt method hash which takes two arguments, the password we want to hash from the request body and second the salt we just created. 
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create the user
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

  res.json({message: 'Register User' })
})

// DESCRIPTION - Authenticate a user
// ROUTE - POST /api/users/login
// ACCESS - Public
const loginUser = asynchHandler( async (req, res) => {
  res.json({message: 'Login User' })
})

// DESCRIPTION - Get user data
// ROUTE - GET /api/users/me
// ACCESS - Public
const getMe = asynchHandler( async (req, res) => {
  res.json({message: 'User data display' })
})






module.exports = {
  registerUser,
  loginUser,
  getMe,
}