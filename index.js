const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const { router } = require("./routes/routes.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.use(cors());

console.log("id", uuidv4());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
