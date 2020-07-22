import { Expression } from "./Expression";

class StringExpression extends Expression {
  constructor(private text: string) {
    super();
  }

  parse(input: string) {
    // assert and consume some stuff
    const output = { text: "found string" };
    return [output, ...super.parse(input)];
  }
}

export const string = (text: string) => new StringExpression(text);
