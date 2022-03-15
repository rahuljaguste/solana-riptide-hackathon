

const SolanaPayPopupLayout = ({children, dialogClose}) => {
    return (
        <div>
            <div className='border-b border-b-border-b-[#DDDDDD] pb-2 flex justify-between'>
                <div>
                    <img src="/solanaPay/solanaPayLogo.png" alt="" className="inline-block" />
                </div>
                <button onClick={dialogClose}><small>x</small></button>
            </div>
            {children}
        </div>
    )
}

export default SolanaPayPopupLayout