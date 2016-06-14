import {IRecipe} from "../../../shared/models/recipe.model";
import * as mongoose from "mongoose";

export interface IRecipesDocument extends IRecipe, mongoose.Document {
}

var schema: mongoose.Schema = new mongoose.Schema({
  name: {type: String, required: true},
  coffeeBeanMl: Number,
  milkMl: Number,
  milkFrothMl: Number,
  sugarMl: Number,
  waterMl: Number
}, {
  collection: "CoffeeRecipes"
});

export var recipesPersistence: mongoose.Model<IRecipesDocument> = mongoose.model<IRecipesDocument>("coffeerecipe", schema);
