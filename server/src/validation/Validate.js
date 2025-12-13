import AppError from "../errors/AppError.js";

const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    const message = err.errors?.[0]?.message || "invalid Input";
    next(new AppError(message, 400));
  }
};
export default validate;
