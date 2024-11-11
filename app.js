const express = require("express");
const morgan = require("morgan");
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");

// Middleware to parse JSON
app.use(express.json());
app.use(morgan("dev"));

// app.get("/tours", (req, res) => res.json({msg: "test"}));
app.use("/api/tours", tourRouter)

app.use("/api/users", userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
