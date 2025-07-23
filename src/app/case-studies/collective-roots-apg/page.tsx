import React from 'react';
import type { Metadata } from 'next';
import { collectiveRootsData } from '@/data/collectiveRootsData';
import CaseStudyLayout from '@/components/CaseStudy/CaseStudyLayout';
import CaseStudyContent from '@/components/CaseStudy/CaseStudyContent';

// SEO metadata for the case study
export const metadata: Metadata = {
  title: 'Collective Roots APG Case Study - From Accessibility Crisis to Inclusive Impact | CareerBot',
  description: 'A detailed case study on how accessibility-first redesign transformed digital barriers into bridges for community engagement, achieving 162% conversion rate improvement.',
  keywords: [
    'UX design',
    'accessibility',
    'WCAG compliance',
    'user research',
    'A/B testing',
    'recovery organization',
    'inclusive design',
    'conversion optimization'
  ],
  openGraph: {
    title: 'Collective Roots APG Case Study - Accessibility-First Redesign',
    description: 'How accessibility-first redesign achieved 162% conversion rate improvement and 58% accessibility score enhancement.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collective Roots APG Case Study - Accessibility-First Redesign',
    description: 'How accessibility-first redesign achieved 162% conversion rate improvement and 58% accessibility score enhancement.',
  },
  alternates: {
    canonical: '/case-studies/collective-roots-apg'
  }
};

export default function CollectiveRootsAPGCaseStudy() {
  return (
    <CaseStudyLayout data={collectiveRootsData}>
      <CaseStudyContent readingMode="gist" data={collectiveRootsData.gist} />
    </CaseStudyLayout>
  );
} 