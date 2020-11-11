var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "ass",
    part: "hole",
  });
});

module.exports = router;
