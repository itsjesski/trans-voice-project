"use client";
import Link from "next/link";

export default function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/voice", label: "Voices" },
  ];

  return (
    <div className="w-full container mx-auto">
      <div className="w-full flex items-center justify-between">
        <a
          className="flex items-center text-transblue no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-transblue via-white to-transpink">
            Metaphonic
          </span>
        </a>

        <div className="flex w-1/2 justify-end content-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="inline-block text-transblue no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
