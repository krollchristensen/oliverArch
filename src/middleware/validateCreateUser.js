module.exports = (req, res, next) => {
  const { name, email } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      message: "Validation error",
      details: "name is required and must be at least 2 characters"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res.status(400).json({
      message: "Validation error",
      details: "email is required and must be a valid email address"
    });
  }

  // Normalize payload so downstream layers can assume clean values
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();

  next();
};
