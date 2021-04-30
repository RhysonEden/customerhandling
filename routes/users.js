const apiRouter = require("express");
const usersRouter = apiRouter.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getClientById, getAllClients } = require("../db");
const SALT_COUNT = 10;

usersRouter.get("/clients", async (req, res, next) => {
  try {
    console.log("running");
    const clients = await getAllClients();
    console.log(clients);
    // getAllclients();
    // res.send({
    //   message: "clients is under construction!",
    // });
    res.send({ clients });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;
