import { ExpressionParseFn, ExpressionResult } from "./Expression";
import { Parser } from "./Parser";

export interface Operator {
  (expressions: ExpressionParseFn[]): OperatorExecutorFn;
}

export interface OperatorExecutorFn {
  (_p: Parser): ExpressionResult[] | null;
}

export const OneOf: Operator = (expressions) => {
  return (_p) => {
    _p.storeIndex();

    let parsed;
    for (let expression of expressions) {
      if ((parsed = expression(_p) !== null)) {
        return parsed;
      } else _p.rollback();
    }
    return null;
  };
};

export const Greedy: Operator = (expressions): OperatorExecutorFn => {
  return (_p) => {
    return expressions;
  };
};
