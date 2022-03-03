
import Head from "next/head";
import { FaFacebookF, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// set custom RPC server endpoint for the final website
// const endpoint = "https://explorer-api.devnet.solana.com";
// const endpoint = "http://127.0.0.1:8899";
const endpoint = "https://ssc-dao.genesysgo.net";

import MyWallet from "../components/MyWallet";

const Home = () => {

  const network = WalletAdapterNetwork.Devnet;

  const wallets = React.useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getLedgerWallet(),
      getTorusWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  const NavbarIndex = () => (
    <div className="bg-black shadow">
      <div className="container mx-auto lg:px-4">
        <div className="flex items-center justify-between py-2">
          <div>
            <img
              src="/logotextgold.png"
              className="w-10 h-10 text-yellow-600 ml-2 lg:ml-6"
              viewBox="0 0 24 24"
              alt="logo"
            />
          </div>
          <div className="flex text-white">
            <div className="flex justify-center space-x-1 lg:mr-16 pl-1 lg:pl-4 gap-1 lg:gap-3">
              <a href="" target="_blank"><FaFacebookF className="h-5 w-5 text-white" /></a>
              <a href="https://twitter.com/maxzproject" target="_blank"><FaTwitter className="h-5 w-5 text-white " /></a>
              <a href="https://www.linkedin.com/company/maxzio/" target="_blank"><FaLinkedin className="h-6 w-6 text-white -mt-[0.05rem]" /></a>
              <a href="https://discord.gg/x3sWSqat5A" target="_blank"><FaDiscord className="h-6 w-6 text-white " /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <div className="bg-black text-white">
          <Head>
            <title>Watch2Earn</title>
            <meta name="description" content="This site will fly high 🦤" />
          </Head>
          <div className="overflow-hidden">
            <div className="  w-full text-white  h-screen  text-2xl scrollbar-hide ">
              <NavbarIndex />
              <div className="h-full w-full bg-black">
                <div className="flex rounded-lg  shadow-lg  w-full h-5/6 p-3 relative">
                  <div className="absolute inset-0">
                    <img className="object-cover w-full lg:w-4/5 h-full " src="/bg.png" alt="A computer background" />
                  </div>
                  <div className={`my-auto p-4 sm:p-16 z-10 w-full lg:w-3/5   lg:pl-16`}>
                    <p className="text-6xl lg:text-7xl font-bold">An Ad Tech Platform for <span className="text-yellow-400">Web 3.0</span></p>
                    <p className="mt-6">Start bringing your brands to Metaverse</p>
                    <button className="bg-yellow-500 text-base text-white font-bold py-2 px-4 lg:w-1/4 mt-4  rounded hover:opacity-80"
                      onClick={() => { }} id="login">
                      Sign Up as Merchant</button>
                    <MyWallet />
                  </div>
                  <div className="z-10 hidden lg:inline-block">
                    <img className="rounded-lg h-full w-full" src='/landing1.png' />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Home;
