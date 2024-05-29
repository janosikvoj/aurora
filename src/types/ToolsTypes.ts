import { LucideIcon } from 'lucide-react';

export type Tool = {
  name: string;
  slug: string;
  id: number;
  icon: LucideIcon;
  element: React.ReactNode;
};
