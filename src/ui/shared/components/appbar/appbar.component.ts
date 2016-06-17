import {Component, Input} from "@angular/core";

export interface IAppbarControl {
  title: string;
  clickHandler: () => void;
}

@Component({
  selector: "appbar",
  styles: [require("./appbar.component.scss")],
  template: require("./appbar.component.html")
})
export class AppbarComponent {

  @Input() title: string;
  @Input() appbarControls: IAppbarControl[];
}
