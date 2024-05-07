"use client";

import { usePathname } from "next/navigation";

import { links } from "@/db/links";
import Link from "next/link";

function Links({ setToggleMenu }) {
  const pathname = usePathname();

  //TEMPORARY
  const isLoggedIn = true;
  const isAdmin = false;

  return (
    <ul className="nav__list">
      {links.map((link) => (
        <li className="nav__item" key={link.title}>
          <Link
            onClick={() => setToggleMenu(false)}
            className={`nav__link ${
              pathname === link.path ? "active-link" : ""
            }`}
            href={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
      {isLoggedIn ? (
        <>
          {isAdmin && (
            <li className="nav__item">
              <Link className="nav__link btn-link" href="/admin">
                Admin
              </Link>
            </li>
          )}
          <li className="nav__item">
            <button className="nav__link btn-link" type="button">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li className="nav__item">
          <Link className="nav__link btn-link" href="/login">
            Login
          </Link>
        </li>
      )}
    </ul>
  );
}
export default Links;
