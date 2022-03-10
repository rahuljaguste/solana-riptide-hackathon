import Drawer from "./Drawer";
import AppNavbar from "./AppNavbar";
import { useState } from "react";

export default function AppLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div className="min-h-screen bg-white">
      <AppNavbar title="Watch2Earn" toggleMenu={toggleMenu} />
      <Drawer showMenu={showMenu} />
      {children}
    </div>
  )
}
