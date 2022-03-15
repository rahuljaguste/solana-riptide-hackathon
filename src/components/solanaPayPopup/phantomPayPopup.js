 
 
 const PhantomPayPopup = ({setPhantomPay}) => {

     return (
         <div>
             <div className="text-center mt-4 text-lg text-[#121816] font-medium">Connected to your Phantom Wallet</div>
             <div className="text-sm text-center text-[#394150] pt-3 pb-5 mx-2 border-b border-b-[#F3F4F6]">Please continue the transaction using your wallet</div>

             <div className="mt-5 flex justify-between space-x-6">
                <div className="flex items-center">
                    <div><img src="/solanaPay/phantom.png"></img></div>
                    <div className="text-sm">&nbsp;<span className="font-medium">Address:</span><span className="text-[#394150]">fannoxyp12...zp8098a</span></div>
                </div>
                 <button className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-xl" onClick={() => {setPhantomPay(false)}}>Change Wallet</button>
             </div>
         </div>
     )
 }

 export default PhantomPayPopup