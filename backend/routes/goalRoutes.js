// Note: we dont want to have all of our routes in server.js, it would be too messy. Therefore we have them in a more organized manner in a separate file.
const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200).json({message: 'Get Goals'})
})

module.exports = router