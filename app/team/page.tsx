'use client';

import { useSampleData } from '@/data/sample-data';

export default function TeamPage() {
  const { team } = useSampleData();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {team.map((m) => (
          <div key={m.id} className="rounded-lg border bg-white p-4 flex items-center gap-4">
            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold ${m.role === 'Designer' ? 'bg-pink-500' : m.role === 'Developer' ? 'bg-blue-500' : 'bg-emerald-500'}`}>
              {m.name.split(' ').map(n => n[0]).join('').slice(0,2)}
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
              <div className="mt-1 text-xs text-gray-500">Load: <span className="font-medium">{m.load}%</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
