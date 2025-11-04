'use client';

import { useSampleData } from '@/data/sample-data';

export default function CalendarPage() {
  const { tasks } = useSampleData();

  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => (
          <div key={d} className="rounded-lg border bg-white p-3 min-h-[120px]">
            <div className="text-sm font-medium text-gray-600">{d}</div>
            <div className="mt-2 space-y-1">
              {tasks.filter(t => t.day === d).map(t => (
                <div key={t.id} className="text-xs px-2 py-1 rounded bg-brand-50 text-brand-700 border border-brand-100">
                  {t.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
