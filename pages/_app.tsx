import "../css/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trans Voice Project</title>
      </Head>

      <div
        className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
        style={{ backgroundImage: "url('header.png')" }}
      >
        <div className="h-full">
          <Nav />
        </div>

        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
