const express = require("express");
const morgan = require("morgan");
const models = require("../models");
const user = models.User;
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("got to GET /users");
});

router.get("/:id", async (req, res, next) => {
  res.send("got to GET /users/" + [req.params.id]);
});

router.post("/", (req, res, next) => {
  res.send("got to POST /users/");
});

router.put("/:id", async (req, res, next) => {
  res.send("got to PUT /users/" + [req.params.id]);
});

router.delete("/:id", async (req, res, next) => {
  res.send("got to delete /users/" + [req.params.id]);
});

module.exports = router;
