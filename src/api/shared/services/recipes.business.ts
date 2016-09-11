import {IRecipe} from "../../../shared/models/recipe.model";
import {IRecipesBusiness} from "../../shared/interfaces";
import {IRecipesDocument} from "../persistence/recipes.persistence";
import {Model} from "mongoose";

export class RecipesBusiness implements IRecipesBusiness {

  constructor(private recipesPersistence: Model<IRecipesDocument>) {
  }

  createRecipe(recipe: IRecipe): Promise<IRecipe> {
    return this.recipesPersistence.create(recipe);
  }

  deleteRecipes(): Promise<any> {
    return this.recipesPersistence.remove({}).exec();
  }

  getRecipes(): Promise<IRecipe[]> {
    return this.recipesPersistence.find({}).exec();
  }
}
