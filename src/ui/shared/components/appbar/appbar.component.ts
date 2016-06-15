import {Component, Input} from "@angular/core";

@Component({
  selector: "appbar",
  styles: [require("./appbar.component.scss")],
  template: require("./appbar.component.html")
})
export class AppbarComponent {

  @Input() title: string;
}
