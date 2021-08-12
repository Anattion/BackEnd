const Meal = require("../model/meals");

class MealsController {
  async store(req, res) {
    try {  
        const data = await Meal.create(req.body);
        return res.json(data);
    } catch (err) {
       return {"Error":err}
  }

  }
  async index(req, res) {
    try {
      const data = await Meal.find({});
      return res.json(data);
    } catch (err) {
      return {"Error":err}
    }
  }
}

module.exports = new MealsController();