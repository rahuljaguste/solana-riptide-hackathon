import Drawer from "./Drawer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar title="Watch2Earn" />
      <Drawer />
      <main>{children}</main>
    </div>
  )
}