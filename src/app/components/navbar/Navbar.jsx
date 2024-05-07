"use client";
import Links from "./links/Links";
import Link from "next/link";
import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link className="nav__logo" href="/">
          Travel
        </Link>
        <div className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}>
          <Links setToggleMenu={setToggleMenu} />
          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setToggleMenu(false)}>
            <RiCloseLine />
          </div>
        </div>
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className="nav__toggle"
          id="nav-toggle">
          <RiMenu2Line />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
