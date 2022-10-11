import {
    stringLength,
    reverseString,
    Calculator,
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

describe("Calculator functions:", () => {
   test("Add numbers:", () => {
       expect(Calculator.add(1, 2)).toBe(3);
       expect(Calculator.add(3, 4)).toBe(7);
       expect(Calculator.add(5, 6)).toBe(11);
   });
    test("Subtract numbers:", () => {
        expect(Calculator.subtract(1, 2)).toBe(-1);
        expect(Calculator.subtract(23, 14)).toBe(9);
        expect(Calculator.subtract(8, 6)).toBe(2);
    });
    test("Multiply numbers:", () => {
        expect(Calculator.multiply(1, 2)).toBe(2);
        expect(Calculator.multiply(3, 4)).toBe(12);
        expect(Calculator.multiply(5, 6)).toBe(30);
    });
    test("Divide numbers:", () => {
        expect(Calculator.divide(12, 2)).toBe(6);
        expect(Calculator.divide(32, 4)).toBe(8);
        expect(Calculator.divide(42, 6)).toBe(7);
    });
});
    
    
