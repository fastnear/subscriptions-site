import Image from "next/image";
import FastNearLogo from "@/app/_components/fastnear-logo";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-dm-sans-1)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="grid place-items-center h-full">
                    <FastNearLogo/>
                </div>
                <ol
                  className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-dm-sans-2)]">
                    <li className="mb-2">
                        Get started by editing{" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <p>Access the fastest RPC and indexing services for NEAR Protocol.</p>

                <p>Freemium and paid plans are available and being added. Log in with an email account to begin the
                    process.</p>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <a
                      href="https://github.com/fastnear"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{display: "flex", alignItems: "center"}}
                    >
                        <Image
                          aria-hidden
                          src="/github.svg"
                          alt="GitHub"
                          width={32}
                          height={32}
                        />
                    </a>
                    <span>Visit the FASTNEAR GitHub organization for the open source contributions provided.</span>
                </div>

            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
