import Head from "next/head";
import Header from "../components/Header";
import ParentBox from "../components/ParentBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Text Utils 📝</title>
        <meta name="title" content="Text Utils 📝" />
        <meta
          name="description"
          content="Minimal yet Pro Text Utility for your all need!"
        />
        <meta name="copyright" content="Mohak Bajaj" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://text-utils-ruddy.vercel.app/" />
        <meta property="og:title" content="Text Utils 📝" />
        <meta
          property="og:description"
          content="Minimal but Useful for your all need!"
        />
        <meta
          property="og:image"
          content="https://text-utils-ruddy.vercel.app/logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://text-utils-ruddy.vercel.app/" />
        <meta property="twitter:title" content="Text Utils 📝" />
        <meta
          property="twitter:description"
          content="Minimal yet Pro Writer for your all need!"
        />
        <meta
          property="twitter:image"
          content="https://text-utils-ruddy.vercel.app/logo.png"
        />

        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-zinc-900 m-2 md:p-2 mon font-semibold md:overflow-y-hidden">
        <Header />
        <ParentBox />
      </div>
    </>
  );
}
