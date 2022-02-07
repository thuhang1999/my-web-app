module.exports = {
  errorHandler,
};

function errorHandler(err, req, res, next) {
  switch (true) {
    case typeof err === "string":
      // custom application error
      const is404 = err.toLowerCase().endsWith("not found");
      const statusCode = is404 ? 404 : 400;
      return res.status(200).json({
        message: err,
        status: statusCode,
        success: false,
      });
    case err.name === "UnauthorizedError":
      return res.status(401).json({ message: "Unauthorized" });
    default:
      return res.status(500).json({ message: err.message });
  }
}
