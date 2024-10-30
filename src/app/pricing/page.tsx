import type { Metadata } from 'next';
import { PLAN_TYPES } from "@/app/pricing/_logic/plan-types";

export default function PricingOptionsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">Pricing Plans</h1>
      <p className="mt-4 text-center">
        Start building for free, then add a site plan to go live. Account plans unlock additional features.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {PLAN_TYPES.map((plan) => (
          <div key={plan.name} className="pricing-card w-full sm:w-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-center">{plan.name}</h2>
            <p className="text-xl font-bold text-center mb-4">{plan.price}/month</p>
            <p className="text-center mb-6">{plan.description}</p>
            <a
              href={plan.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-2 px-4 rounded bg-black text-white font-semibold text-center hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Pricing | FASTNEAR',
    description: 'Pricing plans and blazing fast subscription options.',
  };

  return metadata;
}
