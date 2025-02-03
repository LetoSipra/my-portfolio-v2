import { links } from '@/data/Links';
import Link from 'next/link';

function SideNav() {
  const navList = [
    { label: 'Welcome', scrollTo: 'welcome' },
    { label: 'About', scrollTo: 'about' },
    { label: 'Projects', scrollTo: 'project' },
    { label: 'Contact', scrollTo: 'contact' },
  ];
  return (
    <div className="fixed flex mr-10 self-center">
      <div className="flex flex-col items-end space-y-3">
        {navList.map((link) => (
          <div
            className="flex flex-row space-x-3 items-center cursor-pointer"
            key={link.label}
          >
            <div className="text-xl">{link.label}</div>
            <div className="w-10 border h-0 border-solid border-red-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
