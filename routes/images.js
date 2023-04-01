const express = require("express");
const router = express.Router();
const imageController = require("../Controllers/images");
router.post("/name", imageController.getImageByName);

module.exports = router;
