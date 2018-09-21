const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const models = require('../models');
const page = models.Page;
//Get Post

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send('got to GET /wiki/add');
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
