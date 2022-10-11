import { stringLength } from "./tasks.js";

TextDecoderStream("String Length:", () => {
    expect(stringLength("Hello World!")).toBe(12);
});