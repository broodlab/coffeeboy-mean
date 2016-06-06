import * as chai from "chai";
import {FooService} from "../foo.service";

describe("The 'foo' service", () => {

  it("should provide 'foo'.", () => {
    let fooService: FooService = new FooService();
    chai.expect(fooService.name()).to.eql("foo");
  });
});
