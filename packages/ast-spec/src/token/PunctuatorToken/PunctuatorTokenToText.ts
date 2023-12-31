import type { SyntaxKind } from 'typescript';

import type { AssignmentOperatorToText } from '../../expression/AssignmentExpression/AssignmentOperatorToText';

export interface PunctuatorTokenToText extends AssignmentOperatorToText {
  [SyntaxKind.OpenBraceToken]: '{';
  [SyntaxKind.CloseBraceToken]: '}';
  [SyntaxKind.OpenParenToken]: '(';
  [SyntaxKind.CloseParenToken]: ')';
  [SyntaxKind.OpenBracketToken]: '[';
  [SyntaxKind.CloseBracketToken]: ']';
  [SyntaxKind.DotToken]: '.';
  [SyntaxKind.DotDotDotToken]: '...';
  [SyntaxKind.SemicolonToken]: ';';
  [SyntaxKind.CommaToken]: ',';
  [SyntaxKind.QuestionDotToken]: '?.';
  [SyntaxKind.LessThanToken]: '<';
  [SyntaxKind.LessThanSlashToken]: '</';
  [SyntaxKind.GreaterThanToken]: '>';
  [SyntaxKind.LessThanEqualsToken]: '<=';
  [SyntaxKind.GreaterThanEqualsToken]: '>=';
  [SyntaxKind.EqualsEqualsToken]: '==';
  [SyntaxKind.ExclamationEqualsToken]: '!=';
  [SyntaxKind.EqualsEqualsEqualsToken]: '===';
  [SyntaxKind.ExclamationEqualsEqualsToken]: '!==';
  [SyntaxKind.EqualsGreaterThanToken]: '=>';
  [SyntaxKind.PlusToken]: '+';
  [SyntaxKind.MinusToken]: '-';
  [SyntaxKind.AsteriskToken]: '*';
  [SyntaxKind.AsteriskAsteriskToken]: '**';
  [SyntaxKind.SlashToken]: '/';
  [SyntaxKind.PercentToken]: '%';
  [SyntaxKind.PlusPlusToken]: '++';
  [SyntaxKind.MinusMinusToken]: '--';
  [SyntaxKind.LessThanLessThanToken]: '<<';
  [SyntaxKind.GreaterThanGreaterThanToken]: '>>';
  [SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: '>>>';
  [SyntaxKind.AmpersandToken]: '&';
  [SyntaxKind.BarToken]: '|';
  [SyntaxKind.CaretToken]: '^';
  [SyntaxKind.ExclamationToken]: '!';
  [SyntaxKind.TildeToken]: '~';
  [SyntaxKind.AmpersandAmpersandToken]: '&&';
  [SyntaxKind.BarBarToken]: '||';
  [SyntaxKind.QuestionToken]: '?';
  [SyntaxKind.ColonToken]: ':';
  [SyntaxKind.AtToken]: '@';
  [SyntaxKind.QuestionQuestionToken]: '??';
  [SyntaxKind.BacktickToken]: '`';
  [SyntaxKind.HashToken]: '#';
}
