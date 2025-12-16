import { LucideIcon } from 'lucide-react';
import React from 'react';

export type CarType = 'normal' | 'danger' | 'start' | 'goal';

export interface CarData {
  title: string;
  subtitle?: string;
  type: CarType;
  description: string;
  content: React.ReactNode;
}

export type TabId = 'story' | 'cars' | 'ending';

export interface TabConfig {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

export interface SpoilerProps {
  title: string;
  children: React.ReactNode;
  type?: 'info' | 'danger' | 'secret';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: LucideIcon;
  borderColor?: string;
}