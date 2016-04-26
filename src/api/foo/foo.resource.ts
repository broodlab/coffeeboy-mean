"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as fooService from "./foo.service";

var api: express.Application = express();
api.use(bodyParser.json());

api.get("/foo", (req: express.Request, res: express.Response) => {
  res.send(fooService.getFoo());
});

api.listen(8080);
