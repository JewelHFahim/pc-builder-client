import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbChartDonut2 } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-md px-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="" >Category</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/processor">CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href="/motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/ram">RAM</Link>
                  </li>
                  <li>
                    <Link href="/laptop">Laptop</Link>
                  </li>
                  <li>
                    <Link href="/ssd">SSD</Link>
                  </li>
                  <li>
                    <Link href="/monitor">Monitor</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Rapid PC Bulder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-[200px] z-[9999]">
                <li>
                    <Link href="/processor">CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href="/motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/ram">RAM</Link>
                  </li>
                  <li>
                    <Link href="/laptop">Laptop</Link>
                  </li>
                  <li>
                    <Link href="/ssd">SSD</Link>
                  </li>
                  <li>
                    <Link href="/monitor">Monitor</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/pcbuilder">
            <button class="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-6 py-2">
              <TbChartDonut2 className="text-2xl" />
              <span>PC BUILDER</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
