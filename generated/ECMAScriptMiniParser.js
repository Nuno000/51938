// Generated from c:/Users/nunim/OneDrive/Escritorio/AnalizadorBrunoCirrincione/ECMAScriptMini.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ECMAScriptMiniListener from './ECMAScriptMiniListener.js';
import ECMAScriptMiniVisitor from './ECMAScriptMiniVisitor.js';

const serializedATN = [4,1,26,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,47,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,5,6,59,8,6,
10,6,12,6,62,9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,74,8,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,85,8,7,10,7,12,7,88,9,7,1,7,0,1,14,8,
0,2,4,6,8,10,12,14,0,3,1,0,12,13,1,0,14,15,1,0,16,21,93,0,19,1,0,0,0,2,28,
1,0,0,0,4,30,1,0,0,0,6,36,1,0,0,0,8,39,1,0,0,0,10,48,1,0,0,0,12,56,1,0,0,
0,14,73,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,
19,20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,
29,3,4,2,0,25,29,3,6,3,0,26,29,3,8,4,0,27,29,3,10,5,0,28,24,1,0,0,0,28,25,
1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,3,1,0,0,0,30,31,5,1,0,0,31,32,5,24,
0,0,32,33,5,2,0,0,33,34,3,14,7,0,34,35,5,3,0,0,35,5,1,0,0,0,36,37,3,14,7,
0,37,38,5,3,0,0,38,7,1,0,0,0,39,40,5,4,0,0,40,41,5,5,0,0,41,42,3,14,7,0,
42,43,5,6,0,0,43,46,3,12,6,0,44,45,5,7,0,0,45,47,3,12,6,0,46,44,1,0,0,0,
46,47,1,0,0,0,47,9,1,0,0,0,48,49,5,8,0,0,49,50,5,25,0,0,50,51,5,9,0,0,51,
52,5,5,0,0,52,53,3,14,7,0,53,54,5,6,0,0,54,55,5,3,0,0,55,11,1,0,0,0,56,60,
5,10,0,0,57,59,3,2,1,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,
0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,64,5,11,0,0,64,13,1,0,0,0,65,66,6,7,
-1,0,66,74,5,22,0,0,67,74,5,23,0,0,68,74,5,24,0,0,69,70,5,5,0,0,70,71,3,
14,7,0,71,72,5,6,0,0,72,74,1,0,0,0,73,65,1,0,0,0,73,67,1,0,0,0,73,68,1,0,
0,0,73,69,1,0,0,0,74,86,1,0,0,0,75,76,10,7,0,0,76,77,7,0,0,0,77,85,3,14,
7,8,78,79,10,6,0,0,79,80,7,1,0,0,80,85,3,14,7,7,81,82,10,5,0,0,82,83,7,2,
0,0,83,85,3,14,7,6,84,75,1,0,0,0,84,78,1,0,0,0,84,81,1,0,0,0,85,88,1,0,0,
0,86,84,1,0,0,0,86,87,1,0,0,0,87,15,1,0,0,0,88,86,1,0,0,0,7,19,28,46,60,
73,84,86];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ECMAScriptMiniParser extends antlr4.Parser {

    static grammarFileName = "ECMAScriptMini.g4";
    static literalNames = [ null, "'let'", "'='", "';'", "'if'", "'('", 
                            "')'", "'else'", "'console'", "'log'", "'{'", 
                            "'}'", "'*'", "'/'", "'+'", "'-'", "'=='", "'!='", 
                            "'<'", "'>'", "'<='", "'>='", null, null, null, 
                            "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "Number", 
                             "StringLiteral", "Identifier", "DOT", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "expressionStatement", "ifStatement", "consoleStatement", 
                         "block", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ECMAScriptMiniParser.ruleNames;
        this.literalNames = ECMAScriptMiniParser.literalNames;
        this.symbolicNames = ECMAScriptMiniParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ECMAScriptMiniParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360434) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(ECMAScriptMiniParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ECMAScriptMiniParser.RULE_statement);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.variableDeclaration();
	            break;
	        case 5:
	        case 22:
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.expressionStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.ifStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ECMAScriptMiniParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(ECMAScriptMiniParser.T__0);
	        this.state = 31;
	        this.match(ECMAScriptMiniParser.Identifier);
	        this.state = 32;
	        this.match(ECMAScriptMiniParser.T__1);
	        this.state = 33;
	        this.expression(0);
	        this.state = 34;
	        this.match(ECMAScriptMiniParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ECMAScriptMiniParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.expression(0);
	        this.state = 37;
	        this.match(ECMAScriptMiniParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ECMAScriptMiniParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(ECMAScriptMiniParser.T__3);
	        this.state = 40;
	        this.match(ECMAScriptMiniParser.T__4);
	        this.state = 41;
	        this.expression(0);
	        this.state = 42;
	        this.match(ECMAScriptMiniParser.T__5);
	        this.state = 43;
	        this.block();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 44;
	            this.match(ECMAScriptMiniParser.T__6);
	            this.state = 45;
	            this.block();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ECMAScriptMiniParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ECMAScriptMiniParser.T__7);
	        this.state = 49;
	        this.match(ECMAScriptMiniParser.DOT);
	        this.state = 50;
	        this.match(ECMAScriptMiniParser.T__8);
	        this.state = 51;
	        this.match(ECMAScriptMiniParser.T__4);
	        this.state = 52;
	        this.expression(0);
	        this.state = 53;
	        this.match(ECMAScriptMiniParser.T__5);
	        this.state = 54;
	        this.match(ECMAScriptMiniParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ECMAScriptMiniParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(ECMAScriptMiniParser.T__9);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360434) !== 0)) {
	            this.state = 57;
	            this.statement();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this.match(ECMAScriptMiniParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, ECMAScriptMiniParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 66;
	            this.match(ECMAScriptMiniParser.Number);
	            break;
	        case 23:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 67;
	            this.match(ECMAScriptMiniParser.StringLiteral);
	            break;
	        case 24:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 68;
	            this.match(ECMAScriptMiniParser.Identifier);
	            break;
	        case 5:
	            localctx = new ParensExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 69;
	            this.match(ECMAScriptMiniParser.T__4);
	            this.state = 70;
	            this.expression(0);
	            this.state = 71;
	            this.match(ECMAScriptMiniParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptMiniParser.RULE_expression);
	                    this.state = 75;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 76;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 77;
	                    this.expression(8);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptMiniParser.RULE_expression);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 79;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 80;
	                    this.expression(7);
	                    break;

	                case 3:
	                    localctx = new CompareExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptMiniParser.RULE_expression);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 82;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4128768) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 83;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ECMAScriptMiniParser.EOF = antlr4.Token.EOF;
ECMAScriptMiniParser.T__0 = 1;
ECMAScriptMiniParser.T__1 = 2;
ECMAScriptMiniParser.T__2 = 3;
ECMAScriptMiniParser.T__3 = 4;
ECMAScriptMiniParser.T__4 = 5;
ECMAScriptMiniParser.T__5 = 6;
ECMAScriptMiniParser.T__6 = 7;
ECMAScriptMiniParser.T__7 = 8;
ECMAScriptMiniParser.T__8 = 9;
ECMAScriptMiniParser.T__9 = 10;
ECMAScriptMiniParser.T__10 = 11;
ECMAScriptMiniParser.T__11 = 12;
ECMAScriptMiniParser.T__12 = 13;
ECMAScriptMiniParser.T__13 = 14;
ECMAScriptMiniParser.T__14 = 15;
ECMAScriptMiniParser.T__15 = 16;
ECMAScriptMiniParser.T__16 = 17;
ECMAScriptMiniParser.T__17 = 18;
ECMAScriptMiniParser.T__18 = 19;
ECMAScriptMiniParser.T__19 = 20;
ECMAScriptMiniParser.T__20 = 21;
ECMAScriptMiniParser.Number = 22;
ECMAScriptMiniParser.StringLiteral = 23;
ECMAScriptMiniParser.Identifier = 24;
ECMAScriptMiniParser.DOT = 25;
ECMAScriptMiniParser.WS = 26;

ECMAScriptMiniParser.RULE_program = 0;
ECMAScriptMiniParser.RULE_statement = 1;
ECMAScriptMiniParser.RULE_variableDeclaration = 2;
ECMAScriptMiniParser.RULE_expressionStatement = 3;
ECMAScriptMiniParser.RULE_ifStatement = 4;
ECMAScriptMiniParser.RULE_consoleStatement = 5;
ECMAScriptMiniParser.RULE_block = 6;
ECMAScriptMiniParser.RULE_expression = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_program;
    }

	EOF() {
	    return this.getToken(ECMAScriptMiniParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_variableDeclaration;
    }

	Identifier() {
	    return this.getToken(ECMAScriptMiniParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_ifStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_consoleStatement;
    }

	DOT() {
	    return this.getToken(ECMAScriptMiniParser.DOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMAScriptMiniParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	StringLiteral() {
	    return this.getToken(ECMAScriptMiniParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterStringExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitStringExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitStringExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.StringExprContext = StringExprContext;

class MulDivExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterMulDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitMulDivExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.MulDivExprContext = MulDivExprContext;

class NumberExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Number() {
	    return this.getToken(ECMAScriptMiniParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitNumberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.NumberExprContext = NumberExprContext;

class CompareExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterCompareExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitCompareExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitCompareExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.CompareExprContext = CompareExprContext;

class IdentifierExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(ECMAScriptMiniParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterIdentifierExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitIdentifierExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitIdentifierExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.IdentifierExprContext = IdentifierExprContext;

class ParensExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterParensExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitParensExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitParensExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.ParensExprContext = ParensExprContext;

class AddSubExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.enterAddSubExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMAScriptMiniListener ) {
	        listener.exitAddSubExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMAScriptMiniVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ECMAScriptMiniParser.AddSubExprContext = AddSubExprContext;


ECMAScriptMiniParser.ProgramContext = ProgramContext; 
ECMAScriptMiniParser.StatementContext = StatementContext; 
ECMAScriptMiniParser.VariableDeclarationContext = VariableDeclarationContext; 
ECMAScriptMiniParser.ExpressionStatementContext = ExpressionStatementContext; 
ECMAScriptMiniParser.IfStatementContext = IfStatementContext; 
ECMAScriptMiniParser.ConsoleStatementContext = ConsoleStatementContext; 
ECMAScriptMiniParser.BlockContext = BlockContext; 
ECMAScriptMiniParser.ExpressionContext = ExpressionContext; 
