import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react"


const NavBar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap 
    justify-between
    md:items-center text-white px-10 pt-5 md:px-20">
      <span className="text-xl font-bold tracking-wide">
        Portfolio

      </span>
      <ul className={`${menu ? "block" : "hidden"}
      flex font-semibold 
      mx-24 text-center py-2 mt-4 md:mt-5 
      px-2 bg-opacity-30 md:border-transparent
      md:static md:mx-0 md:flex gap-6 `}>
        <a href="#About">
          <li className="text-md transition-all 
        duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Contact">

          <li className="text-md transition-all 
        duration-300 p-1 md:p-0">Contact</li>
        </a>
        <a href="#Skill">

          <li className="text-md transition-all 
        duration-300 p-1 md:p-0"> Skill</li>
        </a>
        <a href="#Projects">

          <li className="text-md transition-all 
        duration-300 p-1 md:p-0">Projects</li>
        </a>
      </ul>
      {showMenu ?
        (
          <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowMenu(!showMenu);
            }}
          />
        ) :
        (
          <RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" />)}
    </nav>
  )
}

export default NavBar