import React from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const Wallet = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }
    console.log(walletAddress)

    return (
        <div className="mt-4">
            {wallet.connected &&
                <p>Your wallet is {walletAddress}</p> 
            }

            <div className="multi-wrapper">
                <span className="button-wrapper">
                    <WalletModalProvider className="!bg-black">
                        <WalletMultiButton className="!bg-yellow-500 text-base text-white font-bold py-2 px-4  mt-4  rounded hover:opacity-80 "/>
                    </WalletModalProvider>
                </span>
                {wallet.connected && <WalletDisconnectButton className="!bg-yellow-500 text-base text-white font-bold py-2 px-4  mt-4  rounded hover:opacity-80"/>}
            </div>
        </div>
    );
};

export default Wallet;