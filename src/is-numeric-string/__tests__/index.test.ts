import { isNumericString } from "is-numeric-string";

describe("isNumericString", () => {
    test("should return true if the string has only numbers", () => {
        expect(isNumericString("12345")).toBe(true);
    });

    test.each([
        "",
        "12345 ",
        "12345.",
        "12345+",
        "12345-",
        "12345=",
        "12345bh",
        ".12345",
        "+=12345",
        "+12345",
        "abc45",
        "123.45",
        "123abo45",
        "123+45",
        "123=45",
        "%12345%",
        "))fv123",
        "123:",
        "true",
    ])(
        "should return false if the string does not contain only numbers",
        (str) => {
            expect(isNumericString(str)).toBe(false);
        },
    );
});
