/* eslint-disable @typescript-eslint/no-explicit-any */
import ESLintReferencer from 'eslint-scope/lib/referencer';

import type { TSESTree } from '../ts-estree';
import type {
  PatternVisitorCallback,
  PatternVisitorOptions,
  Visitor,
} from './Options';
import type { Scope } from './Scope';
import type { ScopeManager } from './ScopeManager';

interface Referencer<SM extends ScopeManager> extends Visitor {
  isInnerMethodDefinition: boolean;
  options: any;
  scopeManager: SM;
  parent?: TSESTree.Node;

  currentScope(): Scope;
  close(node: TSESTree.Node): void;
  pushInnerMethodDefinition(isInnerMethodDefinition: boolean): boolean;
  popInnerMethodDefinition(isInnerMethodDefinition: boolean): void;

  referencingDefaultValue(
    pattern: any,
    assignments: any,
    maybeImplicitGlobal: any,
    init: boolean,
  ): void;
  visitPattern(
    node: TSESTree.Node,
    options: PatternVisitorOptions,
    callback: PatternVisitorCallback,
  ): void;
  visitFunction(node: TSESTree.Node): void;
  visitClass(node: TSESTree.Node): void;
  visitProperty(node: TSESTree.Node): void;
  visitForIn(node: TSESTree.Node): void;
  visitVariableDeclaration(
    variableTargetScope: any,
    type: any,
    node: TSESTree.Node,
    index: any,
  ): void;

  AssignmentExpression(node: TSESTree.Node): void;
  CatchClause(node: TSESTree.Node): void;
  Program(node: TSESTree.Program): void;
  Identifier(node: TSESTree.Identifier): void;
  UpdateExpression(node: TSESTree.Node): void;
  MemberExpression(node: TSESTree.Node): void;
  Property(node: TSESTree.Node): void;
  MethodDefinition(node: TSESTree.Node): void;
  BreakStatement(): void;
  ContinueStatement(): void;
  LabeledStatement(node: TSESTree.Node): void;
  ForStatement(node: TSESTree.Node): void;
  ClassExpression(node: TSESTree.Node): void;
  ClassDeclaration(node: TSESTree.Node): void;
  CallExpression(node: TSESTree.Node): void;
  BlockStatement(node: TSESTree.Node): void;
  ThisExpression(): void;
  WithStatement(node: TSESTree.Node): void;
  VariableDeclaration(node: TSESTree.Node): void;
  SwitchStatement(node: TSESTree.Node): void;
  FunctionDeclaration(node: TSESTree.Node): void;
  FunctionExpression(node: TSESTree.Node): void;
  ForOfStatement(node: TSESTree.Node): void;
  ForInStatement(node: TSESTree.Node): void;
  ArrowFunctionExpression(node: TSESTree.Node): void;
  ImportDeclaration(node: TSESTree.Node): void;
  visitExportDeclaration(node: TSESTree.Node): void;
  ExportDeclaration(node: TSESTree.Node): void;
  ExportNamedDeclaration(node: TSESTree.Node): void;
  ExportSpecifier(node: TSESTree.Node): void;
  MetaProperty(): void;
}
const Referencer = ESLintReferencer as {
  new <SM extends ScopeManager>(options: any, scopeManager: SM): Referencer<SM>;
};

export { Referencer };
