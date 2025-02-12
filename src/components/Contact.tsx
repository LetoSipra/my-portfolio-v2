"use client";
import { links } from "@/data/Links";
import Animate from "@/utility/Animate";
import Link from "next/link";

function Contact() {
  Animate("contact");
  return (
    <div
      id="contact"
      className="h-screen flex justify-center opacity-0 blur-xl filter transition duration-300 translate-y-52 contact"
    >
      <div className="space-y-10 mx-3 self-center">
        <h1
          className="rounded-lg pb-3 border-b border-red-500 bg-gradient-to-r w-fit 
          from-red-500 to-cyan-200 bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-5xl"
        >
          Contact
        </h1>
        <div className=" tracking-wide lg:flex lg:items-start lg:flex-col space-y-5">
          <div className="relative space-y-10 text-lg tracking-wide xl:max-w-3xl">
            <p>
              I’m open to new opportunities and collaborations. Feel free to
              reach out—I’d love to connect and chat!
            </p>
          </div>
          <div className="flex flex-col font-bold items-start space-y-3 text-lg">
            {links.map((link, name) => (
              <Link href={link.href} target="_blank" key={name}>
                <div className="flex flex-shrink-0 items-center rounded-2xl p-3 border-l border-red-500 transition duration-200 hover:bg-white/5">
                  <link.icon className="mr-1 h-6 w-6" />
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
