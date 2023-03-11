const express = require("express");
const { logger } = require("../helpers/logger");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ info: "lesson2" });
});

router.get("/", logger, (req, res) => {
  console.log(req.query);

  const response = {
    topic: "Node.js + express",
    day: "Czwartek",
  };
  res.json(response);
});

module.exports = { lessonRouter: router };
