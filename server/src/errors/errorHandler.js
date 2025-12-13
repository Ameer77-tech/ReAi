import AppError from "./AppError.js";

export default (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  if (process.env.NODE_ENV === "development") {
    return res.status(error.statusCode).json({
      status: error.status,
      reply: error.message,
      stack: err.stack,
      error: err,
    });
  }

  if (error.isOperational) {
    return res.status(error.statusCode).json({
      status: error.status,
      reply: error.message,
    });
  }

  console.error("🔥Unexpected error", err);

  return res.status(500).json({
    status: "error",
    reply: "something went wrong",
  });
};
