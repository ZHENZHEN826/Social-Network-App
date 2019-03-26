const express = require("express");
const router = express.Router();

// @route   GET api/post/test
// @desc    Tests post route
// @access  Publc
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

module.exports = router;
