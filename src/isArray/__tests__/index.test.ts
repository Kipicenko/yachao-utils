import { isArray } from "@src/isArray";

describe("isArray", () => {
    test("should return true if value array", () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2])).toBe(true);
        expect(isArray(new Array(3))).toBe(true);
    });

    test("should return false if value not array", () => {
        expect(isArray(null)).toBe(false);
        expect(isArray(undefined)).toBe(false);
        expect(isArray(1)).toBe(false);
        expect(isArray(false)).toBe(false);
        expect(isArray({ name: "Alexey" })).toBe(false);
        expect(isArray("[]")).toBe(false);
    });
});
