
// DESCRIPTION - Get all goals
// ROUTE - GET /api/goals
// ACCESS - Private
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get Goals'})
}

// DESCRIPTION - Set a goal
// ROUTE - POST /api/goals
// ACCESS - Private
const setGoal = (req, res) => {

  //read body data
  console.log(req.body)

  // check for body data first
  if(!req.body.text) {
    // If there is no body text, set response status to 400 which is error and as an extra add a json message.
    // res.status(400).json({message: "please add a text field"})
    
    // Option 2 - If there is no body text, set response status to 400 which is error but use express error handler
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({message: 'Set Goal'})
}

// DESCRIPTION - Update goal
// ROUTE - PUT /api/goals/:id
// ACCESS - Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update Goal ${req.params.id}`})
}

// DESCRIPTION - Delete goal
// ROUTE - DELETE /api/goals/:id
// ACCESS - Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
