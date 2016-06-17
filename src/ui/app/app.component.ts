import {Component} from "@angular/core";
import {CreateRecipeComponent} from "../create-recipe/create-recipe.component";
import {InventoryComponent} from "../inventory/inventory.component";
import {RecipesComponent} from "../recipes/recipes-list.component";
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS
} from "@angular/router-deprecated";

@Component({
  selector: "app",
  providers: [ROUTER_PROVIDERS],
  styles: [require("./app.component.scss")],
  template: require("./app.component.html"),
  directives: [ROUTER_DIRECTIVES, RecipesComponent]
})
@RouteConfig([
  {path: "/recipes", name: "Recipes", component: RecipesComponent, useAsDefault: true},
  {path: "/create-recipe", name: "CreateRecipe", component: CreateRecipeComponent},
  {path: "/inventory", name: "Inventory", component: InventoryComponent}
])
export class AppComponent {
}
