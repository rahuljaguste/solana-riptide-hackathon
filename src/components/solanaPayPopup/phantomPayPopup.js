 
 
 const PhantomPayPopup = () => {
     return (
         <div>
             <div className="text-center">Connected to your Phantom Wallet</div>
             <img src="/solanaPay/tsmCoupon.png" alt="" className="mx-auto" />
             <div className="text-center">
                <p><small><b>Looks like you have a TSM Coupon!</b></small></p>
                <p><small>This entitles you to 5% off this transaction. Would you like to use it?</small></p>
                <div className="mt-2">
                    <button className="bg-black text-white px-2 py-1"><small>Use Coupon</small></button>
                    <button className="border ml-4 px-2 py-1 text-[#4F4F4F] border border-[#828282]"><small>No thanks</small></button>
                </div>
             </div>

             <div className="mt-6 flex justify-between space-x-6">
                <div class="flex items-center">
                    <div><img src="/solanaPay/phantom.png"></img></div>
                    <div><small>&nbsp;<b>Address:</b>fannoxyp12...zp8098a</small></div>
                </div>
                 <div><small>Change Wallet</small></div>
             </div>
         </div>
     )
 }

 export default PhantomPayPopup