import React from "react";

function bibliotecaPost() {
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

export default bibliotecaPost;
