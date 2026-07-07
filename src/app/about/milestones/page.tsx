import type { Metadata } from 'next';
import MilestonesClient from '@/components/MilestonesClient';

export const metadata: Metadata = {
  title: 'Our Milestones & Growth Journey | Therallen Pharma',
  description: 'Follow Therallen Pharma\'s growth journey from the establishment of our R&D facility in 2017 to cGMP manufacturing, international audits, and nitrosamine-free products.',
};

export default function MilestonesPage() {
  return <MilestonesClient />;
}
