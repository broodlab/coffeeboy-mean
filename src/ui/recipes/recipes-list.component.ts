import {AppbarComponent} from "../shared/components/appbar/appbar.component";
import {Component} from "@angular/core";
import {IRecipe} from "../../shared/models/recipe.model";
import {PageComponent} from "../shared/components/page/page.component";
import {RecipesService} from "../shared/services/recipes.service";
import "../shared/rxjs-operators.ts";

@Component({
  selector: "recipes-list",
  providers: [RecipesService],
  styles: [require("./recipes-list.component.scss")],
  template: require("./recipes-list.component.html"),
  directives: [AppbarComponent, PageComponent]
})
export class RecipesComponent {

  private _recipes: IRecipe[];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .subscribe(recipes => this._recipes = recipes);
  }

  recipes(): IRecipe[] {
    return this._recipes;
  }
}
