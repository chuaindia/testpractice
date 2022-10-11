// Tasks

// Task 1

const stringLength = (string) =>
{
    const stringLength = string.length;
    try {
        if(stringLength<1) {
            throw new Error ("String Length must be greater than or equal to 1");
        }
        if(stringLength>10) {
            throw new Error ("String Length must be less than or equal to 10");
        }
    } 
    return stringLength;
};

// Task 2

const reverseString = (string) => string.split(" ").reverse().join(" ");


// Task 3

class calculator {
    add = (number1, number2) => number1 + number2;
    subtract = (number1, number2) => number1 - number2;
    multiply = (number1, number2) => number1 * number2;
    divide = (number1, number2) => number1 / number2;
}
const Calculator = new calculator;

// Task 4



