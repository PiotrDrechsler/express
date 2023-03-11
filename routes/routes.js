const express = require("express");
const { lessonRouter } = require("./lessons");
const { userRouter } = require("./users");

const router = express.Router();

router.use("/lessons", lessonRouter);
router.use("/users", userRouter);

module.exports = { router };
