
import HomeNavbar from "./HomeNavbar"
import Head from "next/head"

export default function HomeLayout({children}) {
  return (
    <div className="overflow-hidden h-screen">
      <Head>
        <title>Watch2Earn</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <div className="bg-black w-full text-white h-screen overflow-hidden text-2xl scrollbar-hide">
        <HomeNavbar />
        {children}
      </div>
    </div>
  )
}
