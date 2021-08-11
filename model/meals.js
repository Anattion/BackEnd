const mongoose = require("mongoose");

const MealsSchema = new mongoose.Schema(
  {
    idMeal: {
      type: String,
      required: true
    },
    strMeal: {
      type: String,
      required: true
    },
    strCategory: {
        type: String,
        required: true
      },
    strInstructions: {
        type: String,
        required: true
      },
      strMealThumb: {
        type: String,
        required: true
      } ,   
      strArea: {
        type: String,
        required: true
      }            
  },
);

module.exports = mongoose.model("Meal", MealsSchema);