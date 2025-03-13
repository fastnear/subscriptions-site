// src/app/pricing/[plan]/page.tsx

import { Metadata } from 'next';

type PricingParams = {
    params: Promise<{
        plan: 'free' | 'premium';
    }>;
};

export default async function PricingPlanDetailsPage({ params }: PricingParams) {
  const { plan: planType } = await params;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-4">
              Pricing detail page for: {planType.toUpperCase()}
      </p>
    </div>
  );
}

export async function generateMetadata({ params }: PricingParams): Promise<Metadata> {
  const { plan: planType } = await params;

  let planTitle = 'Invalid plan';
  switch (planType) {
  case 'free':
    planTitle = 'Free Plan';
    break;
  case 'premium':
    planTitle = 'Premium Services';
    break;
  }

  return {
    title: `${planTitle} | FASTNEAR`,
    description: 'Pricing plans and blazing fast subscription options.',
  };
}
