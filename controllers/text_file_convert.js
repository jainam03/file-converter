const fs = require("fs");
const path = require("path");
const url = require("url");
const event = require("../event.json");

const textToPdf = (path) => {
  const inputFile = path;
  console.log(inputFile);

  return inputFile;
  //   try {
  //     // extract content from text file and generate pdf
  //     fs.readFile(inputFile, { encoding: "utf-8" }, (err, data) => {
  //       if (!err) {
  //         console.log(data);
  //       } else {
  //         console.log(err);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     throw new Error();
  //   }
};

const TextToDoc = () => {};
const TextToDocx = () => {};
const TextToXls = () => {};
const TextToXlsx = () => {};

module.exports = { textToPdf };
