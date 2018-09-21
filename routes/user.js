const express = require('express');
const morgan = require('morgan');
const models = require('../models');
const user = models.User;


router.get('/', async (req, res, next) => {
  try {
    const allUsers = await user.findAll();
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;