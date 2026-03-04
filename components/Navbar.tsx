'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignUpButton,
  Show,
  UserButton,
} from "@clerk/nextjs";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div>
      <header className="w-full fixed z-50 bg-[var(--bg-primary)]">
        <div className="wrapper navbar-height py-4 flex justify-between items-center">
          <Link href="/" className="flex gap-0.5 items-center">
            <Image src="/assets/logo.png" alt="Cognitia Logo" width={42} height={26} />
            <span className="logo-text">
              Cognitia
            </span>
          </Link>

          <nav className="w-fit flex gap-7.5 items-center">
            {navItems.map(({ label, href }) => {
              const isActive = pathName == href || (href != "/" && pathName.startsWith(href));

              return (
                <Link href={href} key={label} className={cn('nav-link-base', isActive ? 'nav-link-active' : 'text-black hover:opacity-70')}>{label}</Link>
              );
            })}

            <Show when="signed-out">
              <SignInButton>
                <button className="nav-link-base text-black hover:opacity-70 cursor-pointer">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 cursor-pointer hover:bg-[#5a3ad6] transition-colors">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
