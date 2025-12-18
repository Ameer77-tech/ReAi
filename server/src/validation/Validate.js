

const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    const message = err.errors?.[0]?.message || "invalid Input";
    return res.status(400).json({ success: false, reply: message });
  }
};
export default validate;
