"use client";

import React, { useEffect, useState } from "react";

function useRouterHash() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
      console.log("MOUNTERS 0");
      const onHashChange = () => {
        console.log("MOUNTERS");
        setHash(window.location.hash);
      };
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  return { hash };
}

export default useRouterHash;
