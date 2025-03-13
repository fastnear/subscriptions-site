import Image from "next/image";
import FastNearLogo from "@/app/_components/fastnear-logo";

export default function Home() {
  return (
  // <div className="min-h-screen">
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-orange-950 to-gray-900 text-white">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 pb-10 sm:p-20 font-sans">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-md">
          <div className="flex justify-center mb-4">
            <FastNearLogo />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">Access the fastest RPC for NEAR Protocol</h1>

          <p className="text-center sm:text-left text-lg max-w-xl">
                      Start building with the best tools available for NEAR Protocol. Our platform offers freemium and paid plans to suit your needs.
          </p>

          <p className="text-center sm:text-left text-lg max-w-xl">
                      Freemium and paid plans are available. Log in with your account to begin the process.
          </p>

          <div className="flex items-center gap-3">
            <a href="https://github.com/fastnear" target="_blank" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/github.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            </a>
            <span>Visit the FASTNEAR GitHub organization for open-source contributions.</span>
          </div>
        </main>
      </div>

      {/*<section className="max-w-4xl w-fit mx-auto ">*/}
      {/*    <h2*/}
      {/*      className="text-5xl font-bold text-center mb-12 animate-pulse-fast animate-shimmer">*/}
      {/*        trust earned by*/}
      {/*    </h2>*/}

      {/*    <div className="flex flex-col sm:flex-row gap-8">*/}
      {/*        <div className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">*/}
      {/*            <p className="text-lg italic mb-4">"The speed is unreal. No more waiting around!"</p>*/}
      {/*            <div className="text-yellow-400 font-semibold text-right">@cyphernaut</div>*/}
      {/*        </div>*/}

      {/*        <div className="flex-1 p-6 bg-gray-850 rounded-lg shadow-lg transform hover:scale-105 transition-transform sm:mt-16">*/}
      {/*            <p className="text-lg italic mb-4">"If you're serious about NEAR Protocol, you need FASTNEAR."</p>*/}
      {/*            <div className="text-yellow-400 font-semibold text-right">@blockchainpirate</div>*/}
      {/*        </div>*/}

      {/*        <div className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">*/}
      {/*            <p className="text-lg italic mb-4">"Rock solid reliability. FASTNEAR is the real deal."</p>*/}
      {/*            <div className="text-yellow-400 font-semibold text-right">@darkwebsurfer</div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</section>*/}
    </div>
  );
}
