import { Prompt, Voice } from '../types';

export enum RepeatType {
  OFF = 'OFF',
  DIALOG = 'DIALOG',
  ALL = 'ALL',
}

export enum SessionType {
  RESTART = 'restart',
  RESUME = 'resume',
}

export type RestartSession = {
  type: SessionType.RESTART;
};

export type ResumeSession = {
  type: SessionType.RESUME;
  resume: null | Prompt;
  follow: null | Prompt;
};

export type GoogleSettings = {
  events: null | string;
  customInterface: boolean;
  session: RestartSession | ResumeSession;
  repeat: RepeatType;
  error: null | Prompt;
  permissions: string[];
};

export const defaultPrompt = (prompt?: Prompt | null): null | Prompt => {
  if (!prompt || !prompt.content) return null;
  return {
    content: prompt.content,
    voice: prompt.voice || Voice.DEFAULT,
  };
};

export const defaultGoogleSettings = ({
  events = null,
  customInterface = false,
  session = { type: SessionType.RESTART },
  repeat = RepeatType.ALL,
  permissions = [],
  error,
}: Partial<GoogleSettings> = {}): GoogleSettings => ({
  events,
  customInterface,
  session,
  repeat,
  permissions,
  error: defaultPrompt(error),
});
