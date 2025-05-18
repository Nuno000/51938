grammar ECMAScriptMini;

program
    : statement* EOF
    ;

statement
    : variableDeclaration
    | expressionStatement
    | ifStatement
    | consoleStatement
    ;

variableDeclaration
    : 'let' Identifier '=' expression ';'
    ;

expressionStatement
    : expression ';'
    ;

ifStatement
    : 'if' '(' expression ')' block ('else' block)?
    ;

consoleStatement
    : 'console' DOT 'log' '(' expression ')' ';'
    ;

block
    : '{' statement* '}'
    ;

expression
    : expression op=('*'|'/') expression                     # MulDivExpr
    | expression op=('+'|'-') expression                     # AddSubExpr
    | expression op=('=='|'!='|'<'|'>'|'<='|'>=') expression # CompareExpr
    | Number                                                 # NumberExpr
    | StringLiteral                                          # StringExpr
    | Identifier                                             # IdentifierExpr
    | '(' expression ')'                                     # ParensExpr
    ;

Number         : [0-9]+;
StringLiteral  : '"' (~["\\] | '\\' .)* '"';
Identifier     : [a-zA-Z_][a-zA-Z0-9_]*;
DOT            : '.';
WS             : [ \t\r\n]+ -> skip;

