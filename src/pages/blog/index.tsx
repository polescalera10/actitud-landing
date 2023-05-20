import Blog from "@/components/Blog";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { getPostsQuery } from "@/libs/queries";
import { graphConnect } from "@/config/hygraph";
import { IPost } from "@/libs/types";

interface BlogPageProps {
  posts: IPost[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <>
      <Head>
        <title>Blog - Actitud Plan</title>
      </Head>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Descubre los nuevos posts relacionados con Actitud Plan
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-actitud-default"></span>
                <span className="relative"> saludables y equilibrados</span>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <Blog noTitle items={posts} />
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data: { posts: IPost[] } = await graphConnect.request(getPostsQuery);
  const posts = data.posts;

  return { props: { posts } };
};
