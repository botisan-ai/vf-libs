import { BaseButton, BaseRequest } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

/** @deprecated */
export interface VoiceStepData extends VoiceNode.Capture.StepData<Voice>, BaseButton.StepButton {}

/** @deprecated */
export interface VoiceStep extends VoiceNode.Capture.Step<VoiceStepData> {}

/** @deprecated */
export interface VoiceNode extends VoiceNode.Capture.Node, BaseRequest.NodeButton {}
