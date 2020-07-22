"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
const Expression_1 = require("./Expression");
class StringExpression extends Expression_1.Expression {
    constructor(text) {
        super();
        this.text = text;
    }
    parse(input) {
        // assert and consume some stuff
        const output = { text: "found string" };
        return [output, ...super.parse(input)];
    }
}
exports.string = (text) => new StringExpression(text);
