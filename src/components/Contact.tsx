import { links } from '@/data/Links';
import Link from 'next/link';

function Contact() {
  return (
    <div className="my-14 h-fit">
      <div className="my-10 space-y-10 lg:my-40 xl:mx-10 mx-3">
        <h1
          className="rounded-lg pb-3 border-b border-red-500 bg-gradient-to-r w-fit 
             from-red-500 to-cyan-200 bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-5xl"
        >
          Contact
        </h1>
        <div className=" tracking-wide lg:flex lg:items-start lg:flex-col space-y-5">
          <div className="relative space-y-10 px-2 text-lg tracking-wide lg:max-w-md 2xl:max-w-2xl">
            <p>
              I'm open to any opportunities work or collaborate, Feel free to
              reach out and chat with me.
            </p>
          </div>
          <div className="flex flex-col font-bold items-start space-y-3 text-lg text-red-500">
            {links.map((link, name) => (
              <Link href={link.href} target="_blank" key={name}>
                <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5">
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
