import * as bodyParser from "body-parser";
import * as recipesResource from "./recipes/recipes.resource";
import {config, IConfig} from "./api.config";
import * as express from "express";
import * as mongoose from "mongoose";
import * as morgan from "morgan";

let apiConfig: IConfig = config();

mongoose.connect(apiConfig.databaseUrl, (err: any) => {
  if (err) {
    return console.error("[mongoose] " + err);
  }
});

var api: express.Application = express();
api.use(bodyParser.json());
api.use(morgan(":method :url :status :response-time ms", {
  skip: () => {
    return !apiConfig.debugLog;
  }
}));

recipesResource.init(api);

api.listen(apiConfig.serverPort);
