'use client'

export default function FastNearLogo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-text-glow">
                FAST
      </h1>
      <div className="text-6xl font-extrabold text-pink-500 animate-fast-squish">
                NEAR
      </div>
      <div className="text-4xl md:text-4xl font-medium text-white transform -rotate-3 animate-move-right-delay">
                Subscriptions
      </div>
    </div>
  );
}
