import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="h-full scroll-smooth antialiased dark"
      style={{
        backgroundImage: "url('/assets/bg-darkened.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="flex h-full flex-col overflow-y-scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
