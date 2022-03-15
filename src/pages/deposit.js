import Link from 'next/link'
import Head from 'next/head'
import SolanaPayPopup from '../components/solanaPayPopup/solanaPayPopup'
import { useState } from 'react'

const Deposit = () => {

    const [dialogOpen, setDialogOpen] = useState(false)

    const handlePayWithSPay = () => {
        setDialogOpen(true)
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <SolanaPayPopup dialogOpen={dialogOpen} dialogClose={handleDialogClose} />
            <div className="max-w-xl mx-auto b">
                <div className="text-3xl text-white">Campaign Summary</div>

                <div className="bg-[#F2F2F2] text-black py-3 px-2 mt-2">
                    <div className="flex justify-between border-b border-b-[#86898D] pb-1 text-2xl text-black">
                        <div>Budget:</div>
                        <div>USD 10,000.0</div>
                    </div>

                    <div className="text-sm">
                        <div className="text-center pt-3 pb-2 font-bold">Costs Overview</div>
                        <div className="flex justify-between pb-2">
                            <div>Costs Per View</div>
                            <div>$ 0.10</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Cost per Click on Brand Website</div>
                            <div>$0.30</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Cost per Successful NFT Redemption</div>
                            <div>$1.00</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Gas Fee Alloction</div>
                            <div>$1.00</div>
                        </div>

                        <div className="text-center pt-3 pb-2 font-bold">Video Advertisement</div>
                        <div className="flex justify-between pb-2">
                            <div>Advertiser</div>
                            <div>Nike Philippines Inc.</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Brand</div>
                            <div>Nike</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Campaign Name</div>
                            <div>Lebron 17</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Start Date</div>
                            <div>March 15, 2022</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>End Date</div>
                            <div>March 25, 2022</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>External Link</div>
                            <div className="text-yellow-500"><Link href="https://go.nike.com/Shop-Nike"><a>https://go.nike.com/Shop-Nike</a></Link></div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>NFT Reward</div>
                            <div>Lebron 17</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Quantity</div>
                            <div>1,000</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Blockchain</div>
                            <div>Solana</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Publisher</div>
                            <div>Gather Town</div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end mt-2 text-base">
                    <button className="bg-[#86898D] text-[#FBFBFB] px-2 py-1">Back</button>
                    <button className="bg-white text-black px-2 py-1 ml-3" onClick={handlePayWithSPay}>Pay with <img src="/solanaPay/solanaPayLogo.png" alt="" className="inline-block"/></button>
                </div>
            </div>
        </div>
    )
}

export default Deposit