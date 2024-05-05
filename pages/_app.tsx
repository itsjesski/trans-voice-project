import "../css/globals.css";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { Layout } from "@/components/Layout";
import { AnimatePresence } from "framer-motion";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, key: string) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page, key) => <Layout key={key}>{page}</Layout>);

  return (
    <>
      <Head>
        <title>Metaphonic</title>
      </Head>

      <SessionProvider session={session}>
        <AnimatePresence initial={false} mode="wait">
          {getLayout(
            <Component {...pageProps} key={router.asPath} />,
            router.asPath
          )}
        </AnimatePresence>
      </SessionProvider>
    </>
  );
}

export default MyApp;
