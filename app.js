const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const index = require("./index");

const app = express();
app.use(express.static(__dirname + "./stylesheets"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
