
const PaymentOptionsPopup = ({setPhantomPay}) => {
    return (
        <div>
            <div class='border-b border-b-border-b-[#DDDDDD] mt-2 pb-2 flex justify-between'>
                <div><small>How would you like to pay?</small></div>
                <div class="flex items-center">
                    <div><img src="/solanaPay/usdCoin.png"></img></div>
                    <div><small>&nbsp;118.00 USDC</small></div>
                </div>
            </div>
            <div className="mt-2">
                <small>Select your solana wallet</small>
            </div>
            <div className="flex mt-4 space-x-8">
                <div className="flex-1 text-center">
                    <img className="mx-auto" src="/solanaPay/ftx.png" alt="" />
                    <small className="text-center">FTX</small>
                </div>
                <div className="flex-1 text-center" onClick={() => {setPhantomPay(true)}}>
                    <img className="mx-auto" src="/solanaPay/phantom.png" alt="" />
                    <small className="text-center">Phantom</small>
                </div>
                <div className="flex-1 text-center">
                    <img className="mx-auto" src="/solanaPay/trustWallet.png" alt="" />
                    <small className="text-center">Trust&nbsp;Wallet</small>
                </div>
                <div className="flex-1 text-center">
                    <img className="mx-auto" src="/solanaPay/zelcore.png" alt="" />
                    <small className="text-center">Zelcore</small>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptionsPopup