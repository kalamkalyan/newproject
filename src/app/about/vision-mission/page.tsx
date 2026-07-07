import type { Metadata } from 'next';
import VisionMissionClient from '@/components/VisionMissionClient';

export const metadata: Metadata = {
  title: 'Vision & Mission | Therallen Pharma',
  description: 'Discover Therallen Pharma\'s vision for global drug delivery system innovation, our mission pillars of quality and customer partnership, and our core values.',
};

export default function VisionMissionPage() {
  return <VisionMissionClient />;
}
