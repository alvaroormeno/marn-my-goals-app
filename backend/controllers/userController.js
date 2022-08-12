
// DESCRIPTION - Register a user
// ROUTE - POST /api/users
// ACCESS - Private
const registerUser = (req, res) => {
  res.json({message: 'Register User' })
}

module.exports = {
  registerUser,
}