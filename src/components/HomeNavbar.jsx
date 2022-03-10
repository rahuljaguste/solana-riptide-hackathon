import { FaDiscord, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useWallet } from "@solana/wallet-adapter-react"
import Link from 'next/link';

export default function HomeNavbar() {
  const { connected } = useWallet(); 
  return (
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
            <div className="flex justify-center items-center space-x-1 lg:mr-16 pl-1 lg:pl-4 gap-1 lg:gap-3">
              {connected &&
                <Link href="/app/dashboard" passHref>
                  <button className="!bg-yellow-500 text-base text-white font-bold py-2 px-4 rounded hover:opacity-80">
                    Go to Dashboard
                  </button>
                </Link>
              }
              <a href="" target="_blank" rel="noreferrer"><FaFacebookF className="h-5 w-5 text-white" /></a>
              <a href="https://twitter.com/maxzproject" target="_blank" rel="noreferrer"><FaTwitter className="h-5 w-5 text-white " /></a>
              <a href="https://www.linkedin.com/company/maxzio/" target="_blank" rel="noreferrer"><FaLinkedin className="h-6 w-6 text-white -mt-[0.05rem]" /></a>
              <a href="https://discord.gg/x3sWSqat5A" target="_blank" rel="noreferrer"><FaDiscord className="h-6 w-6 text-white " /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}