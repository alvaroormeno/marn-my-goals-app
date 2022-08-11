// Need this middlewear to override the express default error handle
// Middlewear is functions that execeutes during the request, respinse cycle... when we make a request 

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  res.json({
    message: err.message,
    // We only want this during production mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {
  errorHandler,
}