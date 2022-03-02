import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookSquare, FaTwitter, FaDiscord, FaCaretDown} from 'react-icons/fa'

const Login = () => {
  return (
      <div className="h-screen w-full pt-3 bg-black p-">
        <div className="w-full sm:w-3/4 lg:w-4/12 px- mx-auto bg-[#252529] shadow-2xl">
             <div className="text-center bg-[#404040] rounded-b-3xl overflow-hidden p-3">
                    <p className="text-3xl font-bold">Welcome onboard</p>
                    <p className="mt-2 text-base">Select how you would like to continue</p>
             </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 mx-6 py-6">
                   <div className="bg-[#404040] flex py-3 rounded-md text-xl items-center justify-center">
                       <FcGoogle className="h-9 w-9 mr-2"/>
                       <p>Continue with google</p>
                   </div>
                   <div className="flex gap-2 mt-4">
                        <div className="bg-[#404040] w-1/3 flex py-3 rounded-md text-xl items-center justify-center">
                            <FaFacebookSquare className="h-6 w-6 mr-2"/>
                     
                        </div>
                        <div className="bg-[#404040] w-1/3 flex py-3 rounded-md text-xl items-center justify-center">
                            <FaTwitter className="h-6 w-6 mr-2"/>
                    
                        </div>
                        <div className="bg-[#404040] w-1/3 flex py-3 rounded-md text-xl items-center justify-center">
                            <FaDiscord className="h-6 w-6 mr-2"/>
                       
                        </div>
                   </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300"/>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                    </div>
                    <form>
                        <div className=" w-full mb-3">
                            <label className=" uppercase text-xs font-bold mb-2">Email</label>
                            <input type="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#404040] rounded  shadow-lg  w-full ease-linear transition-all duration-150" placeholder="johndoe@gmail.com"/>
                        </div>
                        <button className="bg-[#404040] p-4 w-full rounded-lg">
                           Continue with email 
                        </button>
                    </form>
                    <div className="bg-[#404040] w-1/2 ml-auto mt-4 rounded-lg px-4 py-1 flex justify-around">
                        <p className="text-base">View more options</p>
                        <FaCaretDown className="h-6 w-6"/>
                    </div>
                </div>
            <div className="text-center bg-[#404040] overflow-hidden p-3 text-gray-300">
                    <p className="text-sm">Secured by</p>
                    <p className="text-2xl font-bold">web3auth</p>
                    <div className="text-sm  flex gap-3 justify-center">
                        <p>Terms of use | </p>
                        <p> Privacy policy | </p>
                        <p> Manage account</p>
                    </div>
             </div>
                </div>
            </div>
      </div>
  )
}

export default Login