'use client';

import {useState, useEffect, useCallback, Suspense} from 'react';
import { useSearchParams } from 'next/navigation';

interface GenerateKeyResponse {
  apiKey: string;
  customerId: string;
}

// Generate API key from session ID using Web Crypto API
const generateApiKey = async (sessionId: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(sessionId);
  const secret = encoder.encode(process.env.NEXT_PUBLIC_API_SERVER_SECRET || 'dev-secret');

  const key = await crypto.subtle.importKey(
    'raw',
    secret,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, data);
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

function WelcomePageContent() {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState(searchParams.get('session_id') || '');
  const [keyData, setKeyData] = useState<GenerateKeyResponse | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateKey = useCallback(async () => {
    if (!sessionId.trim()) {
      setError('Please enter a checkout session ID');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const apiKey = await generateApiKey(sessionId);
      setKeyData({
        apiKey,
        customerId: sessionId
      });
    } catch (error) {
      setError('Failed to generate API key');
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    if (sessionId) {
      generateKey();
    }
  }, [sessionId, generateKey]);

  return (
    <div className="section-themed flex flex-col items-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 heading-themed">
          API Key Generator
        </h1>

        <div className="text-xl text-primary text-center mb-8">
          🎉 Congratulations on your purchase! Let&apos;s get your API key set up.
        </div>

        {/* Key Generation Form */}
        <div className="card-themed mb-8">
          <p className="text-themed-secondary mb-4">
            Enter your Stripe checkout session ID to generate your API key:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              placeholder="cs_test_..."
              className="flex-1 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground"
            />
            <button
              onClick={generateKey}
              disabled={isLoading}
              className="button-themed-primary whitespace-nowrap"
            >
              {isLoading ? 'Generating...' : 'Generate API Key'}
            </button>
          </div>
        </div>

        {/* Results Display */}
        {keyData && (
          <div className="card-themed mb-8">
            <div className="mb-6">
              <strong className="heading-themed block mb-2">Your API Key:</strong>
              <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">{keyData.apiKey}</code>
            </div>

            <div className="mb-6">
              <strong className="heading-themed block mb-2">Customer ID:</strong>
              <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded">{keyData.customerId}</code>
            </div>

            <div className="text-themed-secondary">
              <p className="mb-4">
                Your API key is generated! You can now use it to access FastNear RPC endpoints.
                There are two ways to authenticate your RPC requests:
              </p>

              <strong className="heading-themed block mt-4 mb-2">1. Pass apiKey in the URL:</strong>
              <pre className="overflow-x-auto p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                {`curl "https://rpc.mainnet.fastnear.com?apiKey=${keyData.apiKey}" \\
  -H "Content-Type: application/json" \\
  --data-raw '{"method":"block","params":{"finality":"optimistic"},"id":123,"jsonrpc":"2.0"}'`}
              </pre>

              <strong className="heading-themed block mt-4 mb-2">2. Provide authorization header:</strong>
              <pre className="overflow-x-auto p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                {`curl "https://rpc.mainnet.fastnear.com" \\
  -H "Authorization: Bearer ${keyData.apiKey}" \\
  -H "Content-Type: application/json" \\
  --data-raw '{"method":"block","params":{"finality":"optimistic"},"id":123,"jsonrpc":"2.0"}'`}
              </pre>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-md">
            {error}
          </div>
        )}

        {/* Stripe Portal Link */}
        <a
          href="https://billing.stripe.com/p/login/3cs4j2dS1gXYfHq000"
          target="_blank"
          rel="noopener noreferrer"
          className="card-themed block mb-8 text-primary hover:text-primary-hover transition-colors"
        >
          💳 Manage your subscription in Stripe Customer Portal
        </a>

        {/* Support Info */}
        <div className="card-themed">
          <h2 className="text-xl font-semibold mb-4 heading-themed">Need help or have questions?</h2>
          <div className="space-y-2 text-themed-secondary">
            <p>
              Join our Telegram group{' '}
              <a href="https://t.me/fast_near" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">
                @fast_near
              </a>
              {' '}for community support and updates!
            </p>
            <p>
              Check out our docs at{' '}
              <a href="https://docs.fastnear.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">
                docs.fastnear.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function LoadingState() {
  return (
    <div className="section-themed flex flex-col items-center px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingState />}>
      <WelcomePageContent />
    </Suspense>
  );
}
