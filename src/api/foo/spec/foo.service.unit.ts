"use strict";

import * as chai from "chai";
import * as fooService from "../foo.service";

describe("The 'foo' service should", () => {
  it("provide 'foo'", () => {
    chai.expect(fooService.getFoo()).to.eql("foo");
  });
});
