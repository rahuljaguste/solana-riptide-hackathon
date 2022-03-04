
import Head from "next/head";
import Home from '../components/Home'
const Index = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Head>
        <title>Watch2Earn</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
