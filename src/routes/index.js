var express = require("express");
var router = express.Router();
var debug = require("debug")("expresso:server");

/* GET home page. */
router.all("/", function (req, res, next) {
  res.json(req.cookies);
});

module.exports = router;
