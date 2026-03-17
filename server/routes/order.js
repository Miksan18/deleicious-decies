const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", auth, (req, res) => {
  console.log("Secure Order:", req.body);
  res.json({ message: "Order placed securely" });
});

module.exports = router;