/// <reference path="../../typings/index.d.ts" />

import {AppComponent} from "./app/app.component";
import "bootstrap/dist/css/bootstrap.css";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import "./shared/styles/styles.scss";

if (process.env.COFFEEBOY_PROFILE === "production") {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
