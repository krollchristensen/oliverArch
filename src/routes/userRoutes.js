const express = require("express");
const userController = require("../controllers/userController");
const validateCreateUser = require("../middleware/validateCreateUser");

const router = express.Router();

// Route only maps HTTP paths to controller handlers
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", validateCreateUser, userController.createUser);

module.exports = router;
