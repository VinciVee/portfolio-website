// import { Link } from 'react-router-dom';
// import { RiReactjsLine } from "react-icons/ri"

import { Link } from "react-router-dom"
import { GiFoxTail } from "react-icons/gi"

const Header = () => {
  return (
    <nav className="text-indigo-300 bg-gray-900">
      {/* Nav container */}
      <div className="container flex flex-row flex-wrap items-center justify-between mx-[5vw]">

        {/* LEFT: BRAND CHILD */}
        <Link to="/" className="p-3 cursor-pointer size-fit hover:text-blue-300">
          <GiFoxTail className="inline mr-3 text-2xl"/>
          <span>Portfolio Home</span>
        </Link>

        {/* RIGHT: NAVLINKS CHILD */}
        <div className="size-fit flex flex-row items-baseline gap-[4vw] flex-nowrap" >
          <div className="p-3 cursor-pointer hover:text-blue-300"><Link to="/About">About</Link></div>
          <div className="p-3 cursor-pointer hover:text-blue-300"><Link to="/Contact">Contact</Link></div>
          <div className="p-3 cursor-pointer hover:text-blue-300"><Link to="/Projects">Projects</Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Header
