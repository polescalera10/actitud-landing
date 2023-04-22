import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import LogoCloud from "@/components/LogoCloud";

export default function Home() {
  return (
    <>
      <Head>
        <title>Actitud Plan</title>
        <meta name="description" content="Actitud Plan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Services />
      <LogoCloud />
    </>
  );
}
