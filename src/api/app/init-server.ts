import * as bodyParser from "body-parser";
import {config} from "./config";
import * as express from "express";
import * as morgan from "morgan";
import * as recipesResource from "../recipes/recipes.resource";

export function initServer() {
  "use strict";

  const api: express.Application = express();
  const router: express.Router = express.Router();

  api.use(morgan(":method :url :status :response-time ms", {
    skip: () => {
      return !config.debugLog;
    }
  }));

  api.use(bodyParser.json());

  api.use(config.serverContextPath, router);
  recipesResource.init(router);

  api.listen(config.serverPort);
}
