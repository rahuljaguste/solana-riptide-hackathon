export default function Drawer() {
  return (
    <div className="h-screen drawer w-full fixed rounded z-10">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-background-dark text-primary">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}