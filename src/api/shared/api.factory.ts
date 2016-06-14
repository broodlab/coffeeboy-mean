import {IRecipesBusiness} from "./interfaces";
import {RecipesBusiness} from "./services/recipes.business";
import {recipesPersistence} from "./persistence/recipes.persistence";

export interface IApiFactory {

  recipesBusiness(): IRecipesBusiness;
}

class ApiFactory implements IApiFactory {

  private static _instance: IApiFactory;
  private _recipesBusiness: IRecipesBusiness;

  static instance(): IApiFactory {
    if (!ApiFactory._instance) {
      ApiFactory._instance = new ApiFactory();
    }
    return ApiFactory._instance;
  }

  recipesBusiness(): IRecipesBusiness {
    if (!this._recipesBusiness) {
      this._recipesBusiness = new RecipesBusiness(recipesPersistence);
    }
    return this._recipesBusiness;
  }
}

export function apiFactory(): IApiFactory {
  "use strict";
  return ApiFactory.instance();
}
