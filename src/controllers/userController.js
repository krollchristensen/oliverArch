const userService = require("../services/userService");

exports.getAllUsers = (req, res) => {
  const users = userService.findAll();
  res.json(users);
};

exports.getUserById = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = userService.findById(id);

    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = (req, res, next) => {
  try {
    const createdUser = userService.create(req.body);
    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
};
