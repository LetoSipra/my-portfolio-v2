import { links } from '@/data/Links';
import Link from 'next/link';

function SideLinks() {
  return (
    <div className="flex">
      <div className="fixed ml-5 flex flex-col items-center self-center">
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
      </div>
    </div>
  );
}

export default SideLinks;
