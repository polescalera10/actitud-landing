import React from "react";

function index() {
  return <div>index</div>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default index;
