const express = require("express");
const router = express.Router();
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} = require("../controllers/tourControllers.js");

const auth = require("../middleware/auth.js");

// GET /tours
router.get("/", getAllTours);

router.use(auth);

// POST /tours
router.post("/", createTour);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;
