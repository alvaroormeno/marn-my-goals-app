
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
