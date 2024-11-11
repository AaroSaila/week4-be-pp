const express = require("express");
const router = express.Router();
const {
  getAllusers,
  getuserById,
  createuser,
  updateuser,
  deleteuser
} = require("../controllers/userControllers.js");


// GET /users
router.get("/", getAllusers);

// POST /users
router.post("/", createuser);

// GET /users/:userId
router.get("/:userId", getuserById);

// PUT /users/:userId
router.put("/:userId", updateuser);

// DELETE /users/:userId
router.delete("/:userId", deleteuser);

module.exports = router;
