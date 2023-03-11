const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

const port = 3000;

const middleweare = (req, res, next) => {
  console.log("Przychodzący request");
  next();
};

app.post("/lessons", (req, res) => {
  console.log(req.body);
  res.json({ info: "lesson2" });
});

app.get("/lessons", middleweare, (req, res) => {
  console.log(req.query);

  const response = {
    topic: "Node.js + express",
    day: "Czwartek",
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
