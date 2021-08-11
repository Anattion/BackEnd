const express = require("express");

const routes = express.Router();
const MealController = require("./controler/controler");

routes.get("/meal", MealController.index);

routes.post("/meal", MealController.store);

module.exports = routes;