import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full scroll-smooth antialiased dark">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body
        className="flex h-full flex-col overflow-y-scroll bg-cover bg-fixed"
        style={{ backgroundImage: "url('header.png')" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
