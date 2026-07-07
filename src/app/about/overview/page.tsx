import type { Metadata } from 'next';
import CompanyOverviewClient from '@/components/CompanyOverviewClient';

export const metadata: Metadata = {
  title: 'Company Overview | Therallen Pharma',
  description: 'Learn about Therallen Pharma, a pioneer in pharmaceutical research and development, advanced drug delivery systems, complex formulation R&D, and global manufacturing.',
};

export default function CompanyOverviewPage() {
  return <CompanyOverviewClient />;
}
