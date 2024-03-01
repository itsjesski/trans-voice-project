import "../css/style.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trans Voice Project</title>
      </Head>

      <div className="top-bar">
        <Nav />
      </div>
      <div className="wrapper grid">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
