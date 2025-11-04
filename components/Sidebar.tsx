'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/team', label: 'Team' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r bg-white">
      <div className="h-14 px-4 flex items-center text-brand-700 font-semibold text-lg">AgencyFlow</div>
      <nav className="flex-1 px-2 py-2 space-y-1">
        {nav.map(item => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${active ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'}`}>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 text-xs text-gray-500">? {new Date().getFullYear()} AgencyFlow</div>
    </aside>
  );
}
