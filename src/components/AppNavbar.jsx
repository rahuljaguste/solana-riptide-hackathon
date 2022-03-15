import Link from "next/link";

export default function AppNavbar({ title, toggleMenu }) {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 bg-background text-primary">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={() => toggleMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div className="flex-1">
        <Link href="/" passHref>
          <div className="btn btn-ghost normal-case text-xl">{title}</div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="focus:outline-none h-10 w-10 bg-[#FFCF40] rounded-full">N</button>
        <button className="focus:outline-none h-10 w-10 bg-[#FFCF40] rounded-full">J</button>
      </div>
    </div>
  )
}