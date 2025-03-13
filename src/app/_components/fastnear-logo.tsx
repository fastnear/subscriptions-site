'use client'

export default function FastNearLogo() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 dark:from-green-400 dark:via-blue-500 dark:to-purple-600 animate-text-glow-light dark:animate-text-glow-dark">
          FAST
        </h1>
        <div className="text-4xl sm:text-6xl font-extrabold text-rose-600 dark:text-pink-500 animate-fast-squish">
          NEAR
        </div>
      </div>
      <div className="text-2xl sm:text-4xl font-medium text-gray-800 dark:text-white transform -rotate-3 animate-move-right-delay">
        Subscriptions
      </div>
    </div>
  );
}
