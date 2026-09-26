import { describe, expect, test} from "vitest";
import { add } from "../src/calculator";

describe("calculator", () => {
    test("1+2=3", () => {
        expect(add(1, 2)).toBe(3);
    });
});