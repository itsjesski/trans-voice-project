"use client";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "./ui/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Avatar } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { Logo } from "./Logo";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const router = useRouter();

  const { data: session, status } = useSession();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/listen", label: "Listen" },
  ];

  const pathName = usePathname();

  return (
    <Container>
      <div className="relative z-50 flex justify-between py-8">
        <div className="relative z-10 flex items-center gap-16">
          <Link
            className="flex items-center justify-center text-transblue no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <Logo className="w-12 h-12 lg:w-16 lg:h-16 mr-2" />
            <span className="font-nunito font-black text-white">
              Metaphonic
            </span>
          </Link>

          <div className="hidden lg:flex lg:gap-10">
            {status === "authenticated" &&
              links.map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative -mx-3 -my-2 rounded-lg px-3 py-2 text transition-colors delay-150 hover:text-gray-100 hover:delay-0",
                    router.pathname === href ? "text-white" : "text-gray-400"
                  )}
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      window.clearTimeout(timeoutRef.current);
                    }
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = window.setTimeout(() => {
                      setHoveredIndex(null);
                    }, 200);
                  }}
                >
                  <AnimatePresence>
                    {(hoveredIndex === index ||
                      (hoveredIndex == null && pathName === href)) && (
                      <motion.span
                        className="absolute inset-0 rounded-lg backdrop-blur backdrop-filter "
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                          backgroundColor:
                            hoveredIndex == null && pathName === href
                              ? "rgb(75 85 99 / 0.2)"
                              : "rgb(75 85 99 / 0.35)",
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {status === "authenticated" ? (
            <Dropdown>
              <DropdownButton plain>
                <Avatar
                  alt="User avatar"
                  src={session?.user?.image}
                  className="size-6"
                />
                {session?.user?.name}
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="z-[100]">
                <DropdownItem onClick={() => signOut({ callbackUrl: "/" })}>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button outline href="/login">
              Sign In
              <ArrowRightIcon className="w-10 h-10 text-white" />
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}


