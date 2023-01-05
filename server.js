const express = require("express");
const app = express(); // object of express
// const dotenv = require("dotenv");

app.get("/", (req, res) => {
  res.send("hello!");
  console.log("before api call");
});

const path1 = "C:\\Users\\USER\\Downloads\\Build_ML_Model";

const res = require("./controllers/text_file_convert");
const ans = res.textToPdf;
ans(path1);

app.listen(5000, () => {
  console.log("App is running");
});

// input -> buffer
// format conversion
// output -> file
