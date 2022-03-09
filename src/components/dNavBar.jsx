import { useState } from 'react'
import DashBoard from './dDashBoard';

export default function NavBar() {
    const [menu, setMenu] = useState(false);
    return (
        <div >
            <div className="bg-[#F2F2F2] text-[#0C1C39] flex justify-between items-center">
                <a href="#" className="block p-4 font-bold">-</a>
                <div>
                    <button className="mobile-menu-button p-2 focus:outline-none mx-5 h-10 w-10 bg-[#FFCF40] rounded-full focus:bg-gray-700">
                        N
                    </button>
                    <button className="mobile-menu-button p-2 focus:outline-none h-10 w-10 bg-[#FFCF40] rounded-full focus:bg-gray-700">
                        J
                    </button>
                </div>
            </div>
            <div className="flex bg-[#FDFBFF] h-[100vh] w-auto items-center">
                <div className="sidebar bg-[#DCDCDC] text-[#363A41] text-[16px] w-64 h-[100vh] space-y-6 py-7 px-2">
                    <nav>
                        <a href="#" className="block py-2.5 px-4 rounded ">
                            Dashboard
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded ">
                            Create Ad Campaign
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded ">
                            Upload Video Ad
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded ">
                            Create NFT
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded ">
                            Active Campaigns
                        </a>
                        <a href="" className="block py-2.5 px-4 rounded ">
                            Settings
                        </a>
                        <a href="" className="block text-[#BD0D17] py-2.5 px-4 rounded ">
                            Logout
                        </a>
                    </nav>
                </div>
                <DashBoard />
            </div>
        </div>
    );
}