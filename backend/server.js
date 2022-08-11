const express = require('express');
const dotenv = require('dotenv').config()
const port = 5001

//Initialize express
const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))