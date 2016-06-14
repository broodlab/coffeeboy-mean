import {IRecipe} from "../../shared/models/recipe.model";
import {Promise} from "mongoose";

export interface IRecipesBusiness {

  createRecipe(recipe: IRecipe): Promise<IRecipe>;
  deleteRecipes(): Promise<any>;
  getRecipes(): Promise<IRecipe[]>;
}
