const express = require("express");

const app = express();

const evaluationController = require("./controllers/evaluation.controller");
const studentController = require("./controllers/student.controller");
const userController = require("./controllers/user.controller");

app.use(express.json());

app.use("/evaluation", evaluationController);
app.use("/students",studentController);
app.use("/evaluations",evaluationController);

module.exports = app;