import { describe, expect, it } from "vitest";

describe("branch protection demo", () => {
  it("fails on purpose so the pull request cannot be merged", () => {
    expect(1 + 1).toBe(3);
  });
});
