import { Field, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";

import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

const Login: NextPageWithLayout = () => {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1.0, transition: { duration: 0.2 } }}
    >
      <Link href="/" aria-label="Home" className="flex flex-col">
        <Logo className="mx-auto !h-20" />
        <h1 className="font-black text-5xl font-nunito text-white text-center">
          Metaphonic
        </h1>
      </Link>
      <div className="-mx-4 mt-10 flex-auto bg-gray-900/25 backdrop-filter backdrop-blur px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-16 sm:pb-10">
        <div className="relative">
          <h1 className="text-center text-2xl font-medium tracking-tight text-white">
            Sign in to your account
          </h1>
          <p className="mt-3 text-center text-lg text-gray-300">
            If you haven't signed in before, a new account will be created for
            you.
          </p>
        </div>
        <Button
          type="submit"
          color="indigo"
          className="mt-8 w-full !py-3"
          onClick={() => {
            const query = new URLSearchParams(window.location.search);
            signIn("discord", {
              callbackUrl: query.get("callbackUrl") ?? "/dashboard",
            });
          }}
        >
          Continue with Discord
        </Button>

        <div className="text-center mt-5">
          <Button plain href="/">
            Back
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

Login.getLayout = function getLayout(page: ReactElement, key) {
  return (
    <motion.main
      key={key}
      className="flex min-h-full overflow-hidden pt-16 sm:py-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {page}
    </motion.main>
  );
};

export default Login;
