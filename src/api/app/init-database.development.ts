import {apiFactory} from "../shared/api.factory";
import {IRecipesBusiness} from "../shared/interfaces";

const recipesBusiness: IRecipesBusiness = apiFactory().recipesBusiness();

export function initDatabase(): void {
  "use strict";

  recipesBusiness.deleteRecipes();

  recipesBusiness.createRecipe({
    name: "Cappuccino",
    coffeeBeanMl: 30,
    milkMl: 10,
    milkFrothMl: 10,
    sugarMl: 10,
    waterMl: 190
  });
  recipesBusiness.createRecipe({
    name: "Espresso (single)",
    coffeeBeanMl: 10,
    milkMl: 0,
    milkFrothMl: 0,
    sugarMl: 0,
    waterMl: 50
  });
  recipesBusiness.createRecipe({
    name: "Espresso (double)",
    coffeeBeanMl: 20,
    milkMl: 0,
    milkFrothMl: 0,
    sugarMl: 0,
    waterMl: 100
  });
}
