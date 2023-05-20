import { GetServerSideProps } from "next";
import React from "react";
import { IPost } from "..";
import Image from "next/image";
import Head from "next/head";
import { getPostbySlug } from "@/libs/queries";
import { graphConnect } from "@/config/hygraph";

interface BlogPostProps {
  post: IPost;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <>
      <Head>
        <title>{post.title} - Actitud Plan</title>
      </Head>
      <div className="flex gap-12 flex-col bg-white rounded-sm my-4 p-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            {post.title}
          </h2>
          <Image
            className="img-fluid mb-5"
            src={post.coverImage.url}
            alt={post.title}
            width={1180}
            height={786}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </>
  );
};

export default BlogPost;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;

  const data: { post: IPost } = await graphConnect.request(
    getPostbySlug(slug as string)
  );
  const post = data.post;

  return { props: { post } };
};
