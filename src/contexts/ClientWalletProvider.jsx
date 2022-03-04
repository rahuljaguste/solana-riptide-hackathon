
import { WalletProvider } from "@solana/wallet-adapter-react";

import {
  getPhantomWallet,
  // getLedgerWallet,
  // getMathWallet,
  getSolflareWallet,
  getSolletWallet,
  // getSolongWallet,
  getTorusWallet,
} from '@solana/wallet-adapter-wallets'
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import('@solana/wallet-adapter-react-ui/styles.css') ;

export function ClientWalletProvider(
  props
){
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
       getTorusWallet({
         options: {
           // TODO: Get your own tor.us wallet client Id
           uxMode:'popup',
           whiteLabel :'true',
           
           clientId:
             "BFYmTkQIv1xx66Oq1L42YRRgTflpnlcxS_DF3AH2Lu3NSjDE8NOJWW9gl_5TlAGTvY8k1BBvzYpPcn5D6p5hTJk",
         },
       }),
      // getLedgerWallet(),
      // getSolongWallet(),
      // getMathWallet(),
      getSolletWallet(),
    ],
    []
  );

  return (
    <WalletProvider wallets={wallets} {...props}>
      <WalletModalProvider {...props} />
    </WalletProvider>
  );


}

export default ClientWalletProvider;
