import {IRecipe} from "../../shared/models/recipe.model";

export interface IRecipesBusiness {

  createRecipe(recipe: IRecipe): Promise<IRecipe>;
  deleteRecipes(): Promise<any>;
  getRecipes(): Promise<IRecipe[]>;
}
