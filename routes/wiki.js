const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const models = require("../models");
const page = models.Page;
const main = require("../views/main");
const index = require("../views/index");
//Get Post

router.get("/", async (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

// router.get('/', async (req, res) => {
//   try {
//     const mainPage = await page.findAll({
//       where: {
//         title: 'home page',
//       },
//     });
//     res.send(mainPage);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
