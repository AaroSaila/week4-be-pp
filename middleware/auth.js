const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    next()
  } else {
    res.send("ERROR: You must be an admin")
  }
};

module.exports = auth;
