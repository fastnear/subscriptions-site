import type { Metadata } from 'next'

export default function PricingOptionsPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="mt-4">
                Welcome to the pricing page. Here, you can find our subscription options and details about each plan.
            </p>
        </div>
    );
}

// dynamic metadata
// See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata(): Promise<Metadata> {
    const metadata: Metadata = {
        title: 'Pricing | FASTNEAR',
        description: 'Pricing plans and blazing fast subscription options.',
    }

    return metadata
}
