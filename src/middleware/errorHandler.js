module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  // Avoid leaking internals in 500 responses
  const response = {
    message: status === 500 ? "Internal server error" : err.message
  };

  if (status !== 500) {
    response.details = err.details || null;
  }

  res.status(status).json(response);
};
