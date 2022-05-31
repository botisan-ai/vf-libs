import { NodeType } from './constants';
import { BaseNode, BaseStep, NodeNextID } from './utils';

export interface StepData {
  url: string;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.URL;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.URL;
  url: string;
}
