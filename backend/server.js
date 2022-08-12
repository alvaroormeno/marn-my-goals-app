const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5001

// Run function to connect to MongoDB from db.js file
connectDB()

// Initialize express
const app = express()

// Middlewear to be able to use body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// API main endpoint which uses different routes and each route its respective controller.
app.use('/api/goals', require('./routes/goalRoutes'))

// Middlewear to overwrite default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))