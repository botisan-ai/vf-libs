import { BasePlatformData, Project } from '@voiceflow/api-sdk';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseProject extends Project<BasePlatformData, BasePlatformData> {}

export const defaultBaseProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });