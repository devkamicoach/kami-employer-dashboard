import { ReactNode } from 'react';

export type TopicTypes = {
  icon: ReactNode;
  title: string;
  impressions: string;
};

export type QuickInsightCardTypes = {
  title: string;
  value: string;
  percentage: string;
};
