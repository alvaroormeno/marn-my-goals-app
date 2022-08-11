// Note: we dont want to have all of our routes in server.js, it would be too messy. Therefore we have them in a more organized manner in a separate file.
const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()

const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')

// NOTE: 
// Since both of these routes use the same route of '/' we can merge them into one route.
// EXAMPLE:
// router.route('/').get(getGoals).post(setGoal)
router.get('/', getGoals)
router.post('/', setGoal)

// NOTE: 
// Since both of these routes use the same route of '/:id' we can merge them into one route.
// EXAMPLE:
// router.route('/:id').delete(deleteGoal).put(updateGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

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

