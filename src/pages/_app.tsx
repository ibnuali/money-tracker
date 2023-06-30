"use client;";

import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
