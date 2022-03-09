import Drawer from "./Drawer";
import AppNavbar from "./AppNavbar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <AppNavbar title="Watch2Earn" />
      <Drawer>{children}</Drawer>
    </div>
  )
}