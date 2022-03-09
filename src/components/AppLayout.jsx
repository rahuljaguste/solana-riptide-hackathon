import Drawer from "./Drawer";
import AppNavbar from "./AppNavbar";

export default function AppLayout({ children }) {
  return (
    <div>
      <AppNavbar title="Watch2Earn" />
      <Drawer />
      <main>{children}</main>
    </div>
  )
}