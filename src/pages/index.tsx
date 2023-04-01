import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Actitud Plan</title>
        <meta name="description" content="Actitud Plan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gradient-to-b from-green-50 to-green-100">
          <Navbar />

          <Hero />
          <Features />
          <Footer />
        </div>
      </main>
    </>
  );
}
