import {Component} from "@angular/core";
import {FooComponent} from "../foo/foo.component";

@Component({
  selector: "app",
  styles: [require("./app.component.scss")],
  template: require("./app.component.html"),
  directives: [FooComponent]
})
export class AppComponent {
  name(): string {
    return "app";
  }
}
