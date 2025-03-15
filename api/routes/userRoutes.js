const express = require("express");
const { create, login, profile, list } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", create); 
router.post("/login", login);
router.get("/", list);
router.get("/profile", authMiddleware, profile);

module.exports = router;
