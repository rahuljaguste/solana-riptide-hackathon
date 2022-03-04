import React from 'react'
import { FaDiscord, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Home = () => {

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
        <div className="bg-black w-full text-white  h-screen overflow-hidden text-2xl scrollbar-hide">
            <NavbarIndex />
            <div className="h-full w-full">
                <div className="flex rounded-lg  shadow-lg  w-full h-5/6 p-3 relative">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full lg:w-4/5 h-full " src="/bg.png" alt="A computer background" />
                    </div>
                    <div className={`my-auto p-4 sm:p-16  w-full lg:w-3/5 z-10 lg:pl-16`}>
                        <p className="text-6xl lg:text-7xl font-bold">An Ad Tech Platform for <span className="text-gold">Web 3.0</span></p>
                        <p className="mt-6">Start bringing your brands to Metaverse</p>
                        <button className="bg-yellow-500 text-base text-white font-bold py-2 px-4 lg:w-1/4 mt-4  rounded hover:opacity-80" type="submit">Read More</button>
                    </div>
                    <div className="z-10 hidden lg:inline-block">
                        <img className="rounded-lg h-full w-full" src='/landing1.png' />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home