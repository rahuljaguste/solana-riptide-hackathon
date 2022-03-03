import { useRouter } from "next/router";

import Drawer from "./Drawer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      {router.pathname === '/' && <Navbar title="Watch2Earn" />}
      {/* {<Drawer />} */}
      <main>{children}</main>
    </div>
  )
}