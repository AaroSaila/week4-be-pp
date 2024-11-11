const user = require("../models/userModel.js");

const getAllusers = (req, res) => {
  res.json(user.getAll());
};
 
const createuser = (req, res) => {
  const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  const newuser = user.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
  if (newuser) {
    res.status(201).json(newuser); // 201 Created
  } else {
    res.status(500).json({ message: "Fail to create user" });
  }
};

const getuserById = (req, res) => {
  const userId = req.params.userId;
  const user = user.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

const updateuser = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const updateduser = user.updateOneById(userId, updatedData);
  if (updateuser) {
    res.json(updateduser);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

const deleteuser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = user.deleteOneById(userId);
  if (isDeleted) {
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

module.exports = {
  getAllusers,
  getuserById,
  createuser,
  updateuser,
  deleteuser,
};
