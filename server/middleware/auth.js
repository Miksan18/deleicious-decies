const auth = (req, res, next) => {
  console.log("Auth middleware running");
  next();
};

module.exports = auth;