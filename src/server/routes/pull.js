var express = require("express");
var router = express.Router();

router
  .route("/")

  .post((req, res) => {
    exec(
      "git pull origin master && npm i && pm2 stop 1 && pm2 start 1",
      (...params) => {
        res.send(params);
      }
    );
  });

module.exports = router;