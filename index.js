import antlr4 from "antlr4";
import fs from "fs";

import ECMAScriptMiniLexer from "./generated/ECMAScriptMiniLexer.js";
import ECMAScriptMiniParser from "./generated/ECMAScriptMiniParser.js";
import { CustomECMAScriptMiniVisitor } from "./CustomECMAScriptMiniVisitor.js";

// 1) Leer input.txt
let input;
try {
  input = fs.readFileSync("input.txt", "utf8");
} catch (e) {
  console.error("No se pudo leer input.txt");
  process.exit(1);
}

// 2) Lexer
const chars = new antlr4.InputStream(input);
const lexer = new ECMAScriptMiniLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 🔍 Generar tabla de tokens
tokens.fill();
console.log("\nTabla de Tokens:");
console.log("TOKEN\t\tLEXEMA");
console.log("-----\t\t------");

for (const token of tokens.tokens || []) {
  if (!token || token.type === -1) continue; // Ignorar EOF y valores inválidos
  const tokenName = lexer.symbolicNames?.[token.type] || `TokenType(${token.type})`;
  const lexeme = token.text;
  console.log(`${tokenName.padEnd(16)}\t${lexeme}`);
}

// 3) Parser
const parser = new ECMAScriptMiniParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program();

// 4) Chequear errores de sintaxis
if (parser._syntaxErrors > 0) {
  console.error("\nSe encontraron errores de sintaxis.");
  process.exit(1);
}

console.log("\nEntrada válida.");
console.log("Árbol de derivación:", tree.toStringTree(parser.ruleNames));

// 5) Visitor
const visitor = new CustomECMAScriptMiniVisitor();
visitor.visit(tree);
