const asyncHandler = require('express-async-handler')

// Import Goal Model
const Goal = require('../models/goalModel.js')


// IMPORTANT NOTE -> When we use mongoose inside of these controller functions to interact with database, we get back a promise. Therefore we use async/await... we added async before (req, res). If we use async/await we need to use try/catch syntax. But if dont want to use try/cath and just use error handler we need to use express-async-handler package. We install it and import it to the top of this file and wrap the function with it.

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// DESCRIPTION - Get all goals
// ROUTE - GET /api/goals
// ACCESS - Private
const getGoals = asyncHandler( async (req, res) => {
  // Create variable goals to store goals from mongoDB. We use the mongoose model we imported Goal and use the model method find() to retrieve/find them. Also, we use await since its asynchronous.
  const goals = await Goal.find({user: req.user.id})

  // Set the response status to "success 200" and to include the retrieved goals saved in const goals
  res.status(200).json(goals)
})

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// DESCRIPTION - Create a goal
// ROUTE - POST /api/goals
// ACCESS - Private
const setGoal = asyncHandler( async (req, res) => {

  // Check if there is no body data/text.
  if(!req.body.text) {

    // If no body data/text set response to error:
    // Option 1: set response status to 400 which is an error and as an extra add a json message.
    // res.status(400).json({message: "please add a text field"})
    // Option 2 - set response status to 400  but use express error handler afyer.
    res.status(400)
    throw new Error('Please add a text field')
  }

  // If no error then create a goal with create() method. Inside create we pass a text value which reads the req body text. 
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })
  // Set call response status to "ok 200" and include the goal we just created in db which is saved in the const goal variable
  res.status(200).json(goal)
})

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// DESCRIPTION - Update goal
// ROUTE - PUT /api/goals/:id
// ACCESS - Private
const updateGoal = asyncHandler( async (req, res) => {
  // STEP 1-> Find the goal we want to update to check if it exists or not and save it in goal const. We find it by using findById() method which we pass the id of the goal we want to update. This id comes from the url id params.
  const goal = await Goal.findById(req.params.id)
  // If there is no goal set response status to error code 400 and throw error message.
  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  } 
  // STEP 2-> Find goal to update based on id and update it using findByIdAndUpdate() which uses 3 arguments.
  const updatedGoal = await Goal.findByIdAndUpdate(
    // Id of goal we want to update
    req.params.id,
    // The new data we want to update
    req.body,
    // Just in case option to create it if it doesnt exist.
    {new: true}
  )
  // STEP 3-> Set response status to "ok 200" and add the updatedgoal in the response.
  res.status(200).json(updatedGoal)
})

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// DESCRIPTION - Delete goal
// ROUTE - DELETE /api/goals/:id
// ACCESS - Private
const deleteGoal = asyncHandler( async (req, res) => {
  // STEP 1-> Find goal we want to delete by id and save it in the const variable goal.
  const goal = await Goal.findById(req.params.id)
  // If there is no goal set response status to error code 400 and throw error message.
  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  } 
  // STEP 2-> Easily delete goal by grabbing the saved goal in const goal and using remove method().
  await goal.remove()
  // STEP 3-> Set response status to "ok 200" and add the deleted goal id to the response.
  res.status(200).json({id: req.params.id})
})

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
