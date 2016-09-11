import {config} from "./config";
import * as mongoose from "mongoose";
import {profile} from "./profile";


export function initDatabase() {
  "use strict";

  mongoose.Promise = global.Promise;

  mongoose.connect(config.databaseUrl, (err: any) => {
    if (err) {
      return console.error("[mongoose] " + err);
    }
  });

  require("./init-database." + profile).initDatabase();
}
