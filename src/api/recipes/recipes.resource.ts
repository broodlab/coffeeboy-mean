import {apiFactory} from "../shared/api.factory";
import * as express from "express";
import {IRecipe} from "../../shared/models/recipe.model";

export function init(api: express.Router): void {
  "use strict";

  api.get("/recipes", (req: express.Request, res: express.Response) => {

    apiFactory().recipesBusiness().getRecipes().then((recipes: IRecipe[]) => {
      res.send(recipes);
    });
  });

  api.post("/recipes", (req: express.Request, res: express.Response) => {

    apiFactory().recipesBusiness().createRecipe(req.body).then((recipe: IRecipe) => {
      res.send(recipe);
    });
  });
}
