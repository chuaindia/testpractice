import {
    stringLength,
    reverseString,
       } from "./tasks.js";

test("String Length:", () => {
    expect(stringLength("Hello World!")).toBe(12);
});

test("String length less than 1", () => {
    expect(() => stringLength("")).toThrowError(
        "Failed: String length must not be less than 1 character"
    );
});

test("String length more than 10", () => {
    expect(() => stringLength("Hi! I am Tanusri from India")).toThrowError(
        "Failed: String length must not be more than 10 caracters"
    );
});

test("Reversed String:", () => {
  expect(reverseString("chuaindia")).toBe("aidniauhc");
});
