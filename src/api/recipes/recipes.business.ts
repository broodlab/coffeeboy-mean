import {IRecipe} from "../../shared/models/recipe.model";
import {IRecipesDocument} from "../persistence/recipes.persistence";
import {Model} from "mongoose";
import {Promise} from "mongoose";

export interface IRecipesBusiness {

  createRecipe(recipe: IRecipe): Promise<IRecipe>;
  deleteRecipes(): Promise<any>;
  getRecipes(): Promise<IRecipe[]>;
}

export class RecipesBusiness implements IRecipesBusiness {

  constructor(private recipesPersistence: Model<IRecipesDocument>) {
  }

  createRecipe(recipe: IRecipe): Promise<IRecipe> {
    return <Promise<IRecipe>>this.recipesPersistence.create(recipe);
  }

  deleteRecipes(): Promise<any> {
    return this.recipesPersistence.remove({}).exec();
  }

  getRecipes(): Promise<IRecipe[]> {
    return this.recipesPersistence.find({}).exec();
  }
}
