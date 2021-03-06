const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page

    res.sendFile(path.join(__dirname, "../client/build/index.html"));

});

module.exports = router;