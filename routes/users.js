const express = require("express");

const router = express.Router();

const userTable = [
  { id: "1", name: "Paulka" },
  { id: "2", name: "Piotrek" },
];

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = userTable.find((u) => u.id === id);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.json(user);
  }
});

router.post("/", (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).json({ msg: "prosze podac nazwe" });
    }
    res.status(200).json({ msg: "OK" });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
module.exports = {
  userRouter: router,
};
