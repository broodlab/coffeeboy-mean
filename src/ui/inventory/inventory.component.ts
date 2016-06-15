import {AppbarComponent} from "../shared/components/appbar/appbar.component";
import {Component} from "@angular/core";
import {PageComponent} from "../shared/components/page/page.component";

@Component({
  selector: "inventory",
  template: require("./inventory.component.html"),
  directives: [AppbarComponent, PageComponent]
})
export class InventoryComponent {
}
