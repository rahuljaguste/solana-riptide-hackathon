import React from "react";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";
import AppLayout from "../components/AppLayout";
import HomeLayout from "../components/HomeLayout";
import { useRouter } from "next/router";

// set custom RPC server endpoint for the final website
// const endpoint = "https://explorer-api.devnet.solana.com";
// const endpoint = "http://127.0.0.1:8899";
const endpoint = "https://ssc-dao.genesysgo.net";

const WalletProvider = dynamic(
  () => import("../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider WalletProvider>     
          {getLayout(router, <Component {...pageProps} />)}
      </WalletProvider>
    </ConnectionProvider>
  );
}

function getLayout(router, page) {
  if (router.pathname.startsWith("/app/")) {
    return <AppLayout>{page}</AppLayout>
  }

  return <HomeLayout>{page}</HomeLayout>
}

export default MyApp;
