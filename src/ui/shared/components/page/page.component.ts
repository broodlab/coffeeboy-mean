import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
  selector: "page",
  styles: [require("./page.component.scss")],
  template: require("./page.component.html"),
  directives: [ROUTER_DIRECTIVES]
})
export class PageComponent {
}
