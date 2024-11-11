const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");

// Middleware to parse JSON
app.use(express.json());

// app.get("/tours", (req, res) => res.json({msg: "test"}));
app.use("/tours", tourRouter)

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
