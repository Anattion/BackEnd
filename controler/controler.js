const Meal = require("../model/meals");

class MealsController {
  async store(req, res) {
    const data = await Meal.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Meal.find({});

    return res.json(data);
  }
}

module.exports = new MealsController();