const express =  require('express');
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController.js')

// We need to protect private routes, for example getMe since it gives us the data of user.
// For this we use the protect middleware.
const {protect} = require('../middleware/authMiddleware.js')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router