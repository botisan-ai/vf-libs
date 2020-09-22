import { DefaultNode, DefaultStep, Expression, NodeType } from './types';

export type Set = {
  variable: string | null;
  expression: Expression;
};

export type StepData = {
  sets: Set[];
};

export type NodeSet = {
  variable: string | null;
  expression: string | number;
};

export type NodeData = {
  sets: NodeSet[];
  nextId?: string | null;
};

export type Step = DefaultStep<NodeType.SET, StepData>;
export type Node = DefaultNode<NodeType.SET, NodeData>;