export default function Drawer({ showMenu }) {
  return (
    <div className={`h-[calc(100vh - 64px)] w-full ${showMenu ? "" : "hidden"}`}>
      <div className="h-full fixed">
        <ul className="p-4 overflow-y-auto w-80 text-base-content bg-background-dark !text-primary h-full">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}