import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Watch2Earn</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
