// Import jwt for webtokens
const jwt = require('jsonwebtoken')
// Import bcrypt to hash passwords
const bcrypt = require('bcryptjs')
const asynchHandler = require('express-async-handler')
const User = require('../models/userModel.js')


// DESCRIPTION - Register a user
// ROUTE - POST /api/users
// ACCESS - Public
const registerUser = (req, res) => {
  res.json({message: 'Register User' })
}

// DESCRIPTION - Authenticate a user
// ROUTE - POST /api/users/login
// ACCESS - Public
const loginUser = (req, res) => {
  res.json({message: 'Login User' })
}

// DESCRIPTION - Get user data
// ROUTE - GET /api/users/me
// ACCESS - Public
const getMe = (req, res) => {
  res.json({message: 'User data display' })
}






module.exports = {
  registerUser,
  loginUser,
  getMe,
}