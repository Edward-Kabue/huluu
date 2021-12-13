import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Huluu</title>
        <meta name="description" content="Huluu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header />
    </div>
  );
}
