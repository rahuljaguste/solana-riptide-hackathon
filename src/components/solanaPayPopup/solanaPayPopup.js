import { useState } from "react"
import SolanaPayPopupLayout from "./solanaPayPopupLayout"
import PaymentOptionsPopup from "./paymentOptionsPopup"
import PhantomPayPopup from "./phantomPayPopup"
import { useEffect } from "react"
import PaymentSuccessful from "./paymentSuccessful"

const SolanaPayPopup = ({ dialogOpen, dialogClose }) => {
    const [phantomPay, setPhantomPay] = useState(false)

    useEffect(() => {
        setPhantomPay(false)
    },[dialogOpen,dialogClose])

    return (
        <div>
            <dialog open={dialogOpen}>
                <SolanaPayPopupLayout dialogClose={dialogClose}>
                    {phantomPay?(
                        <PhantomPayPopup setPhantomPay={setPhantomPay} />
                    ):(
                        <PaymentOptionsPopup setPhantomPay={setPhantomPay}/>
                    )}
                    {/* <PaymentSuccessful /> */}
                </SolanaPayPopupLayout>
            </dialog>
        </div>
    )
}

export default SolanaPayPopup