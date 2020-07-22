"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
class Expression {
    constructor(options) {
        this.parserOptions = options;
        this.chainedExpressions = [];
    }
    setParserOptions(options) {
        this.parserOptions = Object.assign(Object.assign({}, this.parserOptions), options);
    }
    then(expr) {
        this.chainedExpressions.push(expr);
        return this;
    }
    thenMaybe(expr) {
        expr.setParserOptions({ optional: true });
        return this.then(expr);
    }
    parse(input) {
        // Note: In the end, one single parser is used (with a nested chain of parsers).
        // The question is, will parsing consume the input, and thus send smaller fractions of text down to the other parsers?
        // Or do I keep an index as to where should be parsed right now?
        //
        // Any implementation of abstract Parser will overwrite the parse method so that it can first assert its own rules,
        // and then call super.parse() (this one) to parse all the other parsers in the chain
        //
        // Given that, any parser implementation could consume what it finds in the string, so that the other parsers have a starting point.
        //
        // TODO:
        // -  make decision about where the internal parsing methods are that every parser implementation uses. Each could get their own instance or have a shared one.
        // -  make decision about how the data is returned in each parser, and how it will be structured in the AST. Technically, each parser in the same adjacent parserChain
        //    should probably appear on the same level in the AST, too.
        // -  make decision about what happens if a parser "fails" or throws an error
        // -  make decision about how sepBy, seq and others work. They probably have to return instances of their own Parser implementation
        return [{}];
    }
}
exports.Expression = Expression;
