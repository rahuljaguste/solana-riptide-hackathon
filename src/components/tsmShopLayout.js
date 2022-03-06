import Head from 'next/head'

export default function TsmShopLayout({children}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div class="border-b border-b-[#DDDDDD] mb-4">
                    <img src="/tsmLogo.png" alt="" className="mx-auto" />
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}