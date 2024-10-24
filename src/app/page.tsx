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
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-dm-sans-2)]">
                    <li className="mb-2">
                        Get started by editing{" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut eros congue, consectetur felis et,
                    molestie ex. Fusce quis convallis ligula, nec imperdiet lacus. Morbi non ultrices odio. Nam
                    hendrerit
                    bibendum sollicitudin. Praesent vitae magna nec elit efficitur aliquet eu nec justo. Proin mollis
                    gravida
                    libero, vel porttitor magna consectetur quis. Aenean id magna eros. Quisque quam lorem, fringilla a
                    placerat at, dapibus at nisi.

                </p><p>Proin maximus eros a convallis eleifend. Sed non nulla pharetra, aliquam ex sit amet, vestibulum
                sem.
                Aenean quis tincidunt quam. Maecenas sed diam suscipit, molestie odio ac, consectetur nisi. Aliquam
                mauris
                ligula, mattis eu diam et, dictum lobortis massa. Suspendisse nec lorem consequat, sagittis justo sit
                amet,
                vehicula nunc. Sed quis velit in ex tincidunt lacinia. Aenean at hendrerit sem, eu feugiat nunc. Morbi
                finibus libero non posuere dapibus. Vivamus aliquam lacus nulla, sed sagittis dolor faucibus vel.
                Phasellus
                non molestie magna, et euismod mauris. Aliquam non nisl consectetur quam sodales hendrerit nec
                vestibulum
                ex. Curabitur porttitor sapien tortor, non porttitor odio tristique a. Morbi auctor vitae felis at
                ullamcorper.

            </p><p>Phasellus fermentum, ex a volutpat egestas, magna ligula tincidunt velit, sed varius leo ex eget sem.
                Maecenas eget nunc ornare, auctor orci quis, aliquet sem. Fusce in orci enim. Sed fermentum egestas sem,
                eget efficitur est mollis at. Maecenas sed mi non enim facilisis rhoncus vel posuere libero. Integer
                vitae
                felis aliquet, porta diam lobortis, maximus magna. Duis ut interdum dui, id dictum felis. Sed arcu
                tellus,
                blandit id ex ut, mollis vestibulum felis. Donec varius, mauris ac convallis venenatis, nunc ligula
                auctor
                purus, vel hendrerit est nisl at mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                ut
                lectus posuere, condimentum erat et, viverra risus. Sed dignissim elementum magna, maximus consequat
                mauris.
                Fusce non nulla eros.

            </p><p>Nunc vel leo lobortis, lobortis felis ac, sagittis tortor. Nulla non sem sapien. Suspendisse nec nisl
                quis diam volutpat hendrerit et ac massa. Etiam laoreet ornare nunc, sed bibendum diam sollicitudin
                quis.
                Donec blandit nec ante sed laoreet. Pellentesque sed est ut orci consectetur posuere. Nam rhoncus a
                lorem
                nec iaculis. Maecenas et tincidunt nisl. Aenean eu eros aliquam, tristique magna vitae, condimentum
                libero.
                Proin nec lectus commodo, vulputate neque et, pellentesque leo. Ut nisi leo, lobortis in quam eu,
                dignissim
                commodo turpis. Donec sed est ac ex aliquam tempor non maximus velit.

            </p><p>Fusce rutrum lorem non mi vestibulum finibus. Mauris eget blandit ipsum, quis suscipit felis. Etiam
                vehicula luctus mi, vitae congue justo blandit quis. Pellentesque quis lectus nulla. Cras venenatis nunc
                eleifend ex interdum blandit. Quisque volutpat fringilla velit eu sollicitudin. Vestibulum posuere nisl
                sit
                amet lectus gravida, a maximus velit condimentum. In scelerisque urna non augue condimentum, non
                placerat
                purus faucibus. Ut consequat, enim accumsan porta sagittis, dolor ex vulputate ligula, non posuere
                turpis
                nunc id nisi. Ut quis ullamcorper mauris. Proin egestas ligula finibus urna viverra convallis.</p>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={64}
                        height={64}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={64}
                        height={64}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={64}
                        height={64}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
