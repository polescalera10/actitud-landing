import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import LogoCloud from "@/components/LogoCloud";
import { GraphQLClient, gql } from "graphql-request";

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

// const url: string = process.env.HYGRAPH_URL || "";

// // instantiating a graphql client...
// const graphConnect = new GraphQLClient(url);

// const query = gql`
//   query Assets {
//     posts {
//       createdAt
//       excerpt
//       id
//       slug
//       content {
//         html
//       }
//       coverImage {
//         url
//       }
//     }
//   }
// `;

// export async function getServerSideProps() {
//   // making request to hygraph for posts
//   const { posts } = await graphConnect.request(query);

//   return { props: { posts } };
// }
