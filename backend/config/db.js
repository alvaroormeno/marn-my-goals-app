// NOTE: In this file we will connect to MONGODB using MONGOOSE
///////////////////////////////////////////////////////////////

const mongoose = require('mongoose');

// FUNCTION to connnect to db. Has to be a asynchronous function since all mongoose methods are asynchronous and return promises.
const connectDB = async () => {
  try{
    // Connect with our mongo uri from env file
    const conn = await mongoose.connect(process.env.MONGO_URI)
    // Once it connects we want to console log a successfull connection, cyan and underline are properties from the colors package.
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    // If there is an error we want to console.log it and then close the process with process.exit
    console.log(error);
    process.exit(1)
  };
};


module.exports =  connectDB