import { items } from '../tsm-shop'
import TsmShopLayout from '../../components/tsmShopLayout'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'
import SolanaPayPopup from '../../components/solanaPayPopup/solanaPayPopup'

const itemDataFromURL = (itemURL) => {
    if (itemURL) {
        for (let i = 0; items.length; i++) {
            if (items[i].url == itemURL) {
                return items[i]
            }
        }
    }
}

const Item = () => {

    const [dialogOpen, setDialogOpen] = useState(false)
    const router = useRouter()
    const { itemURL } = router.query

    const item = itemDataFromURL(itemURL)

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    return (
        <TsmShopLayout>
            <Head>
                <title>{item.name}</title>
            </Head>
            <div class="flex">

                <div class="flex-1">
                    <img src={item.src} alt="" className="mx-auto" />
                </div>

                <div class="flex-1">
                    <div class="pb-5 border-b border-b-[#DDDDDD]">
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                    </div>
                    <ul>
                        <li>48" (4 Foot Long) Faux Cashmere Loop Woven Rug</li>
                        <li>Rubber Non-Slip Underscore</li>
                    </ul>
                    <button onClick={() => { setDialogOpen(true) }}>Add to cart</button>
                </div>

            </div>
            <SolanaPayPopup dialogOpen={dialogOpen} dialogClose={handleDialogClose} />
        </TsmShopLayout>
    )
}


export default Item