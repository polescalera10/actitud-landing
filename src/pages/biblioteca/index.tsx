import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <div>Index</div>;
}

export default Index;
