import { ReactNode } from 'react';

export type TopicTypes = {
  icon: string;
  title: string;
  impressions: string;
  from: string;
};

export type QuickInsightCardTypes = {
  title: string;
  value: string;
  percentage: string;
};

export type ProgrammeInsightCardTypes = {
  title: string;
  topics: Array<string>;
  rate: number;
};

export type KamiCardTypes = {
  title: string;
  description: string;
  actions?: ReactNode | undefined;
  checked?: boolean;
  isCheckbox?: boolean;
};
