// Note: we dont want to have all of our routes in server.js, it would be too messy. Therefore we have them in a more organized manner in a separate file.
const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200).json({message: 'Get Goals'})
})


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