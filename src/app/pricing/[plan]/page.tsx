// TODO: don't worry about this file for a while, getting to know Next

// the detail page for a given plan
// currently 'free' | 'premium'
// to add more, see plan-types.ts

import { Metadata } from "next";

type PricingParams = {
    params: {
        plan: 'free' | 'premium';
    };
};

export default async function PricingPlanDetailsPage({ params }: PricingParams) {
    // interesting await syntax recommended
    // See: https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
    const { plan: planType } = await params
    // console.log('aloha planType', planType)

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="mt-4">
                Pricing detail page for: CHATGPT HELP PLS
            </p>
        </div>
    );
}

// dynamic metadata
// See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: PricingParams): Promise<Metadata> {
    const { plan: planType } = await params
    // console.log('alohaz planType', planType)

    let planTitle = 'Invalid plan'
    switch (planType) {
        case 'free':
            planTitle = 'Free plan'
            break;
        case 'premium':
            planTitle = 'Premium Services'
            break;
    }

    const metadata: Metadata = {
        title: `${planTitle} | FASTNEAR`,
        description: 'Pricing plans and blazing fast subscription options.',
    }

    return metadata
}
