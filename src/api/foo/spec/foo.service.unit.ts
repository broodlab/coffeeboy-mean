"use strict";

import * as chai from "chai";
import * as fooService from "../foo.service";

describe("The 'foo' service", () => {
  it("should provide 'foo'.", () => {
    chai.expect(fooService.getFoo()).to.eql("foo");
  });
});
