import { Parser } from "./Parser";

export interface ExpressionDefinition {
  (...args: any[]): ExpressionParseFn;
}

export interface ExpressionParseFn {
  (_p: Parser): ExpressionResult | null;
}

export interface ExpressionResult {}

export const Word: ExpressionDefinition = (word: string) => {
  return (_p) => {
    return null;
  };
};

export const Number: ExpressionDefinition = () => {
  return null;
};
