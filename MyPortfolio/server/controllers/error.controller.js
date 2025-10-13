function handleError(req, res) {
  // You can customize error handling here
  res.status(500).json({ error: "Internal Server Error" });
}

function getErrorMessage(err) {
  // Return a readable error message
  if (err.message) return err.message;
  if (err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  }
  return "Unknown server error";
}

module.exports = {
  handleError,
  getErrorMessage,
};
