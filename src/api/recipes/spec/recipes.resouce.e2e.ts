import {apiFactory} from "../../api.factory";
import * as chai from "chai";
import {config} from "../../api.config";
import {IRecipe} from "../../../shared/models/recipe.model";
import * as mongoose from "mongoose";
import * as request from "supertest";
import {Response} from "superagent";

describe("'recipes' API resource:", () => {

  beforeEach((done) => {
    mongoose.connect(config().databaseUrl, (err: any) => {
      if (err) {
        return console.error("[mongoose] " + err);
      }
    });
    apiFactory().recipesBusiness().deleteRecipes()
      .then(() => {
        done();
      });
  });

  afterEach(() => {
    mongoose.disconnect();
  });

  describe("The GET method should", () => {

    it("provide an empty list if there are no recipes.", (done) => {
      request(config().serverUrl)
        .get("/recipes")
        .expect([])
        .end(done);
    });

    it("provide a list of recipes if there are some.", (done) => {
      let recipes: IRecipe[] = [{
        name: "Cappuccino"
      }, {
        name: "Espresso (single)"
      }];

      apiFactory().recipesBusiness().createRecipe(recipes[0])
        .then(() => {
          return apiFactory().recipesBusiness().createRecipe(recipes[1]);
        })
        .then(() => {
          request(config().serverUrl)
            .get("/recipes")
            .expect((response: Response) => {
              chai.expect(response.body.length).to.eql(recipes.length);
            })
            .end(done);
        });
    });
  });
});
