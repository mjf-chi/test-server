const express = require('express');
const lru = require('lru-cache');
const router = express.Router();
const iphits = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  // clean ip header before adding this to object
  iphits[req.ip] = (iphits[req.ip] || 0) + 1;
  res.send(`${req.ip} has hit the server ${iphits[req.ip]} times`);
});

module.exports = router;
