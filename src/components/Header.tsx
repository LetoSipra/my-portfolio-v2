'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import Image from 'next/image';

function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [componentDidMount, setcomponentDidMount] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const navList = [
    { label: 'Welcome', scrollTo: 'welcome' },
    { label: 'About', scrollTo: 'about' },
    { label: 'Projects', scrollTo: 'project' },
    { label: 'Contact', scrollTo: 'contact' },
  ];
  return (
    <header
      className={`fixed top-0 flex z-50 h-24 w-full rounded-b-3xl border-b border-red-500/40 bg-[#141517]/90`}
    >
      <div className="flex w-full items-center md:mx-auto md:flex-[0.8]">
        <Link href={'/'}>
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
          {navList.map((props: any, i: number) => (
            <li
              key={i}
              style={props}
              className={`cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-white/5
          ${
            !currentPage &&
            'first:font-extrabold first:shadow-sm first:shadow-red-500/25'
          }`}
              //   onClick={() => {
              //     navList[i].scrollTo.current.scrollIntoView({
              //       behavior: 'smooth',
              //       block: 'start',
              //     });
              //   }}
            >
              {navList[i].label}
            </li>
          ))}
        </ul>
        {!navMenuOpen && (
          <div
            onClick={() => setNavMenuOpen(true)}
            className={`mx-10 flex w-full transform justify-end opacity-0 transition-all duration-1000 ease-in-out md:hidden ${
              componentDidMount && 'opacity-100'
            }`}
          >
            <HiMenu className="h-16 w-16 cursor-pointer rounded-full p-3 text-slate-400 transition duration-200 hover:bg-white/5" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
