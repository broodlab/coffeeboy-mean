import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {IRecipe} from "../../../shared/models/recipe.model";
import {Observable} from "rxjs/Rx";

@Injectable()
export class RecipesService {

  constructor(private http: Http) {
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get("api/recipes")
      .map((response: Response) => {
        return response.json();
      });
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post("api/recipes", recipe)
      .map((response: Response) => {
        return response.json();
      });
  }
}
