const express = require("express");
const router = express.Router();
const txtFileConverter = require("../controllers/text_file_convert");

router.post("/", () => txtFileConverter.textToPdf);

module.exports = router;
