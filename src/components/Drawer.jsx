import Link from "next/link";

export default function Drawer({ showMenu }) {
  return (
    <div className={`h-[calc(100vh - 64px)] w-full ${showMenu ? "" : "hidden"}`}>
      <div className="h-full fixed">
        <ul className="p-4 overflow-y-auto w-80 text-base-content bg-background-dark !text-primary h-full space-y-5">
          <li><Link href="/app/dashboard">Dashboard</Link></li>
          <li><Link href="/app/create-nft">Create NFT</Link></li>
        </ul>
      </div>
    </div>
  )
}