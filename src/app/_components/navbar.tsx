import FastNearLogo from "@/app/_components/fastnear-logo";

interface NavlinksProps {
    user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    return (
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center flex-1">
                <Link href="/" aria-label="Logo">
                    <FastNearLogo />
                </Link>
                <nav className="ml-6 space-x-2 lg:block">
                    <Link href="/">Pricing</Link>
                    {user && (
                        <Link href="/account">Account</Link>
                    )}
                </nav>
            </div>
            <div className="flex justify-end space-x-8">
                {user ? (
                    <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
                        <input type="hidden" name="pathName" value={usePathname()} />
                        <button type="submit" className={s.link}>
                            Sign out
                        </button>
                    </form>
                ) : (
                    <Link href="/signin" className={s.link}>
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
}
