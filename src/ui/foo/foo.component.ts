import {Component} from "@angular/core";
import {FooService} from "./foo.service";

@Component({
  selector: "foo",
  providers: [FooService],
  styles: [require("./foo.component.scss")],
  template: require("./foo.component.html")
})
export class FooComponent {

  constructor(private fooService: FooService) {
  }

  name(): string {
    return this.fooService.name();
  }
}
