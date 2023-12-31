import type { TSESLint } from '@typescript-eslint/utils';

export type CompilerFlags = Record<string, unknown>;

export type SourceType = TSESLint.SourceType;

export type RulesRecord = TSESLint.Linter.RulesRecord;
export type RuleEntry = TSESLint.Linter.RuleEntry;

export interface RuleDetails {
  name: string;
  description?: string;
}

export type TabType = 'code' | 'tsconfig' | 'eslintrc';

export interface ConfigModel {
  jsx?: boolean;
  sourceType?: SourceType;
  eslintrc: string;
  tsconfig: string;
  code: string;
  ts: string;
  showAST?: boolean | 'ts' | 'es' | 'scope';
}

export interface SelectedPosition {
  line: number;
  column: number;
}

export interface SelectedRange {
  start: SelectedPosition;
  end: SelectedPosition;
}

export interface ErrorItem {
  message: string;
  location: string;
  severity: number;
  suggestions: { message: string; fix(): void }[];
  fixer?: { message: string; fix(): void };
}

export interface ErrorGroup {
  group: string;
  uri?: string;
  items: ErrorItem[];
}

export type EslintRC = Record<string, unknown> & { rules: RulesRecord };
export type TSConfig = Record<string, unknown> & {
  compilerOptions: CompilerFlags;
};
