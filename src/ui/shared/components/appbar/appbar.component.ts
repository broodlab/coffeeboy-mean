import {Component, Input} from "@angular/core";

export interface IAppbarControl {
  clickHandler ?: () => void;
  title: string;
}

@Component({
  selector: "appbar",
  styles: [require("./appbar.component.scss")],
  template: require("./appbar.component.html")
})
export class AppbarComponent {

  @Input() appbarControls: IAppbarControl[];
  @Input() title: string;
}
