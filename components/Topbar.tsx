'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Topbar() {
  const pathname = usePathname();
  const title = pathname === '/' ? 'Dashboard' : pathname.split('/').filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1)).join(' / ');

  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="font-semibold text-gray-900">{title || 'Dashboard'}</div>
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xs px-3 py-1.5 rounded-md border hover:bg-gray-50">New Project</Link>
        <Link href="/" className="text-xs px-3 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700">New Task</Link>
      </div>
    </header>
  );
}
