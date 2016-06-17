import {AppbarComponent} from "../shared/components/appbar/appbar.component";
import {Component} from "@angular/core";
import {PageComponent} from "../shared/components/page/page.component";

@Component({
  selector: "create-recipe",
  styles: [require("./create-recipe.component.scss")],
  template: require("./create-recipe.component.html"),
  directives: [AppbarComponent, PageComponent]
})
export class CreateRecipeComponent {
}
