import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import LogoCloud from "@/components/LogoCloud";
import Blog from "@/components/Blog";
import { GetServerSideProps } from "next";
import { IPost } from "@/libs/types";
import { getHomePosts } from "@/libs/queries";
import { graphConnect } from "@/config/hygraph";

interface HomeProps {
  posts: IPost[];
}

const Home = ({ posts }: HomeProps) => {
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
      <Blog items={posts} />
      <LogoCloud />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data: { posts: IPost[] } = await graphConnect.request(getHomePosts);
  const posts = data.posts;

  return { props: { posts } };
};
