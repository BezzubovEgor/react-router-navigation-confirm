import { noop } from "../../lib/utils";

describe("Utils tests", () => {
  it("should invoke empty function", () => {
    expect(noop()).toBeUndefined();
  });
});
