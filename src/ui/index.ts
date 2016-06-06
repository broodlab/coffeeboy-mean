/// <reference path="../../typings/index.d.ts" />

import {AppComponent} from "./app/app.component";
import "bootstrap/dist/css/bootstrap.css";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import "./shared/shared.scss";

if (process.env.ENV === "production") {
  enableProdMode();
}

bootstrap(AppComponent, []);
