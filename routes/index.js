const apiRouter = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUsersByID } = require("../db");
const { JWT_SECRET } = process.env;

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const clientRouter = require("./clients");
apiRouter.use("/clients", clientRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
