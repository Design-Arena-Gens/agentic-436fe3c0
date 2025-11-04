'use client';

import { useSampleData } from '@/data/sample-data';

const columns = [
  { key: 'backlog', title: 'Backlog' },
  { key: 'in_progress', title: 'In Progress' },
  { key: 'review', title: 'Review' },
  { key: 'done', title: 'Done' },
] as const;

export default function KanbanBoard() {
  const { tasks, updateTaskStatus } = useSampleData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {columns.map((c) => (
        <div key={c.key} className="rounded-lg border bg-white p-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{c.title}</h3>
            <span className="text-xs text-gray-500">{tasks.filter(t => t.status === c.key).length}</span>
          </div>
          <div className="mt-3 space-y-2 min-h-[140px]">
            {tasks.filter(t => t.status === c.key).map(t => (
              <div key={t.id} className="rounded border p-3 bg-gray-50">
                <div className="text-sm font-medium">{t.title}</div>
                <div className="mt-1 text-xs text-gray-600">{t.projectName} ? {t.assignee}</div>
                <div className="mt-2 flex gap-2">
                  {c.key !== 'backlog' && (
                    <button onClick={() => updateTaskStatus(t.id, 'backlog')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Backlog</button>
                  )}
                  {c.key !== 'in_progress' && (
                    <button onClick={() => updateTaskStatus(t.id, 'in_progress')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">In Progress</button>
                  )}
                  {c.key !== 'review' && (
                    <button onClick={() => updateTaskStatus(t.id, 'review')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Review</button>
                  )}
                  {c.key !== 'done' && (
                    <button onClick={() => updateTaskStatus(t.id, 'done')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Done</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
