import React from 'react'
import Wallet from './Wallet'

const Home = () => {
    return (
    <div className="h-full w-full">
      <div className="flex rounded-lg  shadow-lg  w-full h-5/6 p-3 relative">
        <div className="absolute inset-0">
            <img className="object-cover w-full lg:w-4/5 h-full " src="/bg.png" alt="A computer background" />
        </div>
        <div className={`my-auto p-4 sm:p-16  w-full lg:w-3/5 z-10 lg:pl-16`}>
            <p className="text-6xl lg:text-7xl font-bold">An Ad Tech Platform for <span className="text-gold">Web 3.0</span></p>
            <p className="mt-6">Start bringing your brands to Metaverse</p>
            <Wallet />
        </div>
        <div className="z-10 hidden lg:inline-block">
            <img className="rounded-lg h-full w-full" src='/landing1.png' />
        </div>
      </div>
    </div>
    )
}

export default Home