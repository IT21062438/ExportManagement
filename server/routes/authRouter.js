const { authenticate, authorizeRoles } = require("../Middlewares/Auth");
const { signup, login } = require("../Controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();
router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

// Protected route (user or admin)
router.get("/profile", authenticate, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});

router.get("/admin", authenticate, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Admin data", user: req.user });
});

module.exports = router;
