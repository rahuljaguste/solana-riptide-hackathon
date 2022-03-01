import Link from 'next/link'


export const items = [
    {id: "item1", src: "/item1.png", name: "TSM Tiger Rug", price: "118", url: 'tsm-tiger-rug'},
    {id: "item2", src: "/item2.png", name: "TSM Pro Varsity Jacket", price: "105", url:'tsm-pro-varsity-jacket'},
    {id: "item3", src: "/item3.png", name: "Nexus Windbreaker", price: "95", url: 'nexus-windbreaker'},
    {id: "item4", src: "/item4.png", name: "TSM Logo Anorak Graphite", price: "80", url: 'tsm-logo-anorak-graphite'}
]

const TsmShop = () => {
    return (
        <div class="flex">
            {items.map((item) => (
                <div key={item.id} className="flex-1">
                    {/* <Link href={`/tsm-shop/${item.url}`}>
                        <a> */}
                            <img src={item.src} alt="" className="mx-auto"/>
                            <div className="uppercase text-center">{item.name}</div>
                            <div className="text-center">${item.price}</div>
                        {/* </a>
                    </Link> */}
                </div>
            ))}
        </div>
    )
}

export default TsmShop

