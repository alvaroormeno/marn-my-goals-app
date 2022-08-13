const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Function protect to
const protect = asyncHandler(async (req, res, next) => {
  // Initialize a varibale token
  let token

  // NOTE: The way this is sent is in the http headers, inside the headers there is an authorization object.
  // Check if there is a authorization header and if the header starts with bearer wich it always does
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
    try {
      // Get token from header using split. 
      // - Since the authorization header is (Bearer token) we use split which will split the header based on spaces ' ' and put all words into an array. Since this array will only have 2 items/words we want the second one which is the token, hence we add [1] 
      token = req.headers.authorization.split(' ')[1]

      // Verify the token
      // Set a variable to jwt and use verify methos that takes in the token itself and the secret on our env file.
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //Get user from the token (since the token has the user id as payload)
      // - Also assign the user to req.user so we can access req.user in any protected route.
      // - Find user from User model using findbyid methos which we pass the id that can be found in the decoded variable. When verifying it gives us acces to the token payload which contains id.
      // - We dont want the password hash from the token so we use .select method which we pass -password.
      req.user = await User.findById(decoded.id).select('-password')

      // Add next() so we can use the next piece of middleware
      next()

    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')

    }
  }
    

    // If there is no token
    if(!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
})

module.exports = {protect}