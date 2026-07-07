import type { Metadata } from 'next';
import LeadershipClient from '@/components/LeadershipClient';

export const metadata: Metadata = {
  title: 'Leadership & Team | Therallen Pharma',
  description: 'Meet the team of industry veterans, formulation scientists, regulatory experts, and pharma leaders driving Therallen\'s research and scientific excellence.',
};

export default function LeadershipPage() {
  return <LeadershipClient />;
}
