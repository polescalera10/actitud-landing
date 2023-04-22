import React from "react";

function blogPost() {
  return <div>[slug]</div>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default blogPost;
