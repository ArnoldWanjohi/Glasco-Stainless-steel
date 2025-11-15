import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Glasco - Our Story & Expertise',
  description: 'Discover the rich history and expertise behind Glasco Stainless Steel - your trusted partner for premium metal and glass solutions.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}
