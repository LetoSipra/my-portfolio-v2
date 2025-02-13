"use client";
import { links } from "@/data/Links";
import Animate from "@/utility/Animate";
import Link from "next/link";

function SideLinks() {
  Animate("links");
  return (
    <div className="fixed flex flex-col items-center self-end group ml-5 opacity-0 blur-xl filter transition duration-500 links">
      {/* icons */}
      <div className="space-y-3">
        {links.map((link) => (
          <Link href={link.href} key={link.name} target="__blank">
            <div
              title={link.name}
              className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5  hover:text-red-500"
            >
              <link.icon className="h-6 w-6" />
            </div>
          </Link>
        ))}
      </div>
      <div className="h-20 w-0 rounded-3xl border border-red-500/75 shadow-red-500 transition duration-300 hover:shadow-sm group-hover:border-red-500"></div>
    </div>
  );
}

export default SideLinks;
