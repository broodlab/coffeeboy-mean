import {AppbarComponent, IAppbarControl} from "../shared/components/appbar/appbar.component";
import {Component} from "@angular/core";
import {IRecipe} from "../../shared/models/recipe.model";
import {PageComponent} from "../shared/components/page/page.component";
import {RecipesService} from "../shared/services/recipes.service";

@Component({
  selector: "create-recipe",
  providers: [RecipesService],
  styles: [require("./create-recipe.component.scss")],
  template: require("./create-recipe.component.html"),
  directives: [AppbarComponent, PageComponent]
})
export class CreateRecipeComponent {

  recipe: IRecipe = {name: null};

  constructor(private recipesService: RecipesService) {
  }

  save(): void {
    this.recipesService.createRecipe(this.recipe);
  }

  appbarControls(): IAppbarControl[] {
    return [
      {
        clickHandler: () => {
          this.save();
        },
        title: "Save"
      }
    ];
  }
}
