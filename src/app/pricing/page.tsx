import type { Metadata } from 'next';
import { PLAN_TYPES } from "@/app/pricing/_logic/plan-types";

export default function PricingOptionsPage() {
  return (
    <div className="p-12 min-h-[85vh] bg-gradient-to-b from-gray-950 via-orange-950 to-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-6">Pricing Plans</h1>
      <p className="text-lg max-w-2xl mb-12">
        Start building for free, then add a site plan to go live. Account plans unlock additional features.
      </p>

      <div className="flex flex-wrap justify-center gap-12 mt-8 mb-20">
        {PLAN_TYPES.map((plan) => (
          <div key={plan.name} className="pricing-card w-full sm:w-80 p-8 rounded-lg shadow-lg  transition-shadow flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-center">{plan.name}</h2>
              <p className="text-xl font-bold text-center mb-4">{plan.price} &#8260; month</p>
              <p className="text-center mb-6">{plan.description}</p>
            </div>
            <a
              href={plan.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto block py-3 px-4 rounded bg-black text-white font-semibold text-center hover:bg-gray-600"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto p-8 bg-teal-950 border border-amber-400 rounded-lg shadow-lg transition-shadow animate-glow-pulse">
        <h3 className="text-3xl font-bold text-center mb-6 tracking-wider">Comparison</h3>
        <table className="w-full text-center text-white">
          <thead>
            <tr>
              <th className="p-4 border-b border-gray-700 text-lg">Feature</th>
              <th className="p-4 border-b border-gray-700 text-lg">Free</th>
              <th className="p-4 border-b border-gray-700 text-lg">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-gray-700">API Rate Limit</td>
              <td className="p-4 border-b border-gray-700">50 requests/min</td>
              <td className="p-4 border-b border-gray-700">Unlimited</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-700">Access additional FASTNEAR offerings</td>
              <td className="p-4 border-b border-gray-700">Limited</td>
              <td className="p-4 border-b border-gray-700">Yes</td>
            </tr>
            <tr>
              <td className="p-4">Priority Support</td>
              <td className="p-4">Limited capacity</td>
              <td className="p-4 text-6xl">👂🏼</td>
            </tr>
          </tbody>
        </table>
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
