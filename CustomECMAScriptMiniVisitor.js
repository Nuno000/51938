import ECMAScriptMiniVisitor from "./generated/ECMAScriptMiniVisitor.js";

export class CustomECMAScriptMiniVisitor extends ECMAScriptMiniVisitor {
  constructor() {
    super();
    this.memory = {};
  }

  visitProgram(ctx) {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
    console.log("\nValores finales de las variables:");
    for (const [id, val] of Object.entries(this.memory)) {
      console.log(`${id} = ${val}`);
    }
    return null;
  }

  visitVariableDeclaration(ctx) {
    const id = ctx.Identifier().getText();
    const value = this.visit(ctx.expression());
    this.memory[id] = value;
    console.log(`Asignación: ${id} = ${value}`);
    return value;
  }

  visitExpressionStatement(ctx) {
    return this.visit(ctx.expression());
  }

  visitMulDivExpr(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    return ctx.op.text === "*" ? l * r : l / r;
  }

  visitAddSubExpr(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    return ctx.op.text === "+" ? l + r : l - r;
  }

  visitCompareExpr(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    switch (ctx.op.text) {
      case "==": return l === r;
      case "!=": return l !== r;
      case "<": return l < r;
      case ">": return l > r;
      case "<=": return l <= r;
      case ">=": return l >= r;
    }
  }

  visitNumberExpr(ctx) {
    return parseInt(ctx.Number().getText(), 10);
  }

  visitStringExpr(ctx) {
    const raw = ctx.StringLiteral().getText();
    return raw.slice(1, -1); // remueve las comillas
  }

  visitIdentifierExpr(ctx) {
    const id = ctx.Identifier().getText();
    return this.memory[id] ?? 0;
  }

  visitParensExpr(ctx) {
    return this.visit(ctx.expression());
  }

  visitIfStatement(ctx) {
    const condition = this.visit(ctx.expression());
    const thenBlock = ctx.block(0);
    const elseBlock = ctx.block(1);

    if (condition) {
      return this.visit(thenBlock);
    } else if (elseBlock) {
      return this.visit(elseBlock);
    }
  }

  visitBlock(ctx) {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
  }

  visitConsoleStatement(ctx) {
    const value = this.visit(ctx.expression());
    console.log(value);
    return null;
  }
}
