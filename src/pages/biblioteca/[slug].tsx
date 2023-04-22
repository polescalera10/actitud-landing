import { useRouter } from "next/router";
import React, { useEffect } from "react";

function BibliotecaPost() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <div>[slug]</div>;
}

export default BibliotecaPost;
