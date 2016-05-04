import {apiFactory} from "../api.factory";
import * as express from "express";
import {IRecipe} from "../../shared/models/recipe.model";

export function init(api: express.Application): void {
  "use strict";

  api.get("/recipes", (req: express.Request, res: express.Response) => {

    apiFactory().recipesBusiness().getRecipes().then((recipes: IRecipe[]) => {
      res.send(recipes);
    });
  });
}
