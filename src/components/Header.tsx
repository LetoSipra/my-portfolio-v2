"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";
import Animate from "@/utility/Animate";
import { navList } from "@/data/NavList";

function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [componentDidMount, setcomponentDidMount] = useState(false);

  useEffect(() => {
    setcomponentDidMount(true);
  }, []);

  Animate("header");

  return (
    <>
      <MobileNavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      <header
        className={`fixed top-0 flex z-40 h-24 w-full border-b border-red-500/40 
        bg-[#141517] opacity-0 blur-xl filter transition duration-500 header`}
      >
        <div className="flex w-full items-center md:mx-auto md:flex-[0.8]">
          <Link href={"/"}>
            <Image
              className="ml-5 h-[50px] cursor-pointer object-contain transition duration-300 hover:opacity-75"
              src="/logo.png"
              alt="Yusuf's logo"
              width={180}
              height={38}
              priority
            />
          </Link>
          <ul
            className={`mx-10 hidden w-full justify-end space-x-5 font-mono text-red-500 transition duration-200 md:flex
            
            `}
          >
            {navList.map((nav, i: number) => (
              <li
                key={i}
                className={`cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-white/5
              `}
                onClick={() => {
                  const scroll: any = document.getElementById(nav.scrollTo);
                  scroll.scrollIntoView({
                    behavior: "smooth",
                    block: nav.scrollTo === "project" ? "start" : "center",
                  });
                }}
              >
                {nav.label}
              </li>
            ))}
          </ul>
          {!navMenuOpen && (
            <div
              onClick={() => setNavMenuOpen(true)}
              className={`mx-10 flex w-full transform justify-end opacity-0 transition-all duration-1000 ease-in-out md:hidden ${
                componentDidMount && "opacity-100"
              }`}
            >
              <HiMenu className="h-16 w-16 cursor-pointer rounded-full p-3 text-red-500 transition duration-200 hover:bg-white/5" />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
