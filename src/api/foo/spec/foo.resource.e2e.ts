"use strict";

import * as request from "supertest";

describe("The 'foo' resource should", () => {
  it("provide 'foo'", (done) => {
    request("http://localhost:8080")
      .get("/foo")
      .expect("foo")
      .end(done);
  });
});
