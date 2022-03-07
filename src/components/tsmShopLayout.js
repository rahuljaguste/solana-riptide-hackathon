import Head from 'next/head'
import Link from 'next/link'

export default function TsmShopLayout({children, cart}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="flex items-center justify-between border-b border-b-[#DDDDDD] mb-4 py-2">
                    <div>
                        <img src="/hamburgerMenu.png"></img>
                    </div>

                    <div>
                        <Link href="/tsm-shop"><a><img src="/tsmLogo.png" alt="" className="mx-auto" /></a></Link>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <img src="/login.png"></img>
                        <img src="/search.png"></img>
                        {!cart && <Link href="/tsm-shop/cart"><a><img src="/cart.png"></img></a></Link>}
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}