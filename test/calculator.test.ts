import { describe, expect, test} from "vitest";
import { add, subtract } from "../src/calculator";

describe("calculator", () => {
  test("1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("5 - 3 = 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});