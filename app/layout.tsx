import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Workflow Dashboard',
  description: 'Track projects, tasks, and creative workflows',
};

import '../styles/globals.css';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
