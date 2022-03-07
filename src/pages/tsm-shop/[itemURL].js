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
    const [itemsCounter, setItemsCounter] = useState(1)
    const [itemsInCartCounter, setItemsInCartCounter] = useState(0)
    const router = useRouter()
    const { itemURL } = router.query

    const item = itemDataFromURL(itemURL)

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const handleReduceItemsCounter = () => {
        if(itemsCounter > 1)
        {
            setItemsCounter(itemsCounter-1)
        }
    }

    const handleIncreaseItemsCounter = () => {
        setItemsCounter(itemsCounter+1)
    }

    const handleAddToCart = () => {
        setItemsInCartCounter(itemsCounter)
        setDialogOpen(true)
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
                    <div className="border-2 border-[#DDDDDD] flex items-center justify-between w-1/6">
                        <button className="ml-2" onClick={handleReduceItemsCounter}>-</button>
                        <span className="display:inline-block">{itemsCounter}</span>
                        <button className="mr-2" onClick={handleIncreaseItemsCounter}>+</button>
                    </div>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>

            </div>
            <SolanaPayPopup dialogOpen={dialogOpen} dialogClose={handleDialogClose} />
        </TsmShopLayout>
    )
}


export default Item