import type { Metadata } from 'next';
import { PLAN_TYPES } from "@/app/pricing/_logic/plan-types";

export default function PricingOptionsPage() {
  return (
    <div className="section-themed flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-center mb-6 heading-themed tracking-tight">
          Pricing Plans
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-center mb-12 text-themed-secondary leading-relaxed">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-20">
          {PLAN_TYPES.map((plan) => (
            <div key={plan.name} className="pricing-card card-themed w-full sm:w-80">
              <div>
                <h2 className="heading-themed">{plan.name}</h2>
                <div className="price">{plan.price} <span className="text-2xl text-muted">/ month</span></div>
                <p className="description">{plan.description}</p>
              </div>
              <a
                href={plan.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button-themed-primary w-full block text-center"
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>

        <div className="card-themed max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 tracking-tight heading-themed">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center comparison-table">
              <thead>
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700 text-lg">Feature</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700 text-lg">Free</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700 text-lg">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">API Rate Limit</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">50 requests/min</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">Access additional FASTNEAR offerings</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">Limited</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">Yes</td>
                </tr>
                <tr>
                  <td className="p-4">Priority Support</td>
                  <td className="p-4">Limited capacity</td>
                  <td className="p-4">
                    <span className="text-4xl" role="img" aria-label="Priority Support Available">👂🏼</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
