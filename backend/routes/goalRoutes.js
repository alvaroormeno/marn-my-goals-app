// Note: we dont want to have all of our routes in server.js, it would be too messy. Therefore we have them in a more organized manner in a separate file.
const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()

const { getGoals } = require('../controllers/goalController.js')


router.get('/', getGoals)
 

router.post('/', (req, res) => {
  res.status(200).json({message: 'Set Goal'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update Goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = router

// NOTE:
// Insted of having the complete route with its functionality inside its body like this: 
//////////////////////////////////////////////////
// router.get('/', (req, res) => {
//   res.status(200).json({message: 'Get Goals'})
// })
//////////////////////////////////////////////////
// We create a Controller file and we create a controller function for each api route therefore our route in this file is cleaner and easier to read like this:
//////////////////////////////////////////////////
// router.get('/', getGoals)
//////////////////////////////////////////////////
// and the controller for this function which is being called inside as the second argument getGoals looks like this:
//////////////////////////////////////////////////
// const getGoals = (req, res) => {
//   res.status(200).json({message: 'Get Goals'})
// }
//////////////////////////////////////////////////

