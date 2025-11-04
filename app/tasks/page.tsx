'use client';

import { useSampleData } from '@/data/sample-data';

export default function TasksPage() {
  const { tasks, updateTaskStatus } = useSampleData();

  const groups = [
    { key: 'backlog', title: 'Backlog' },
    { key: 'in_progress', title: 'In Progress' },
    { key: 'review', title: 'Review' },
    { key: 'done', title: 'Done' },
  ] as const;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div key={g.key} className="rounded-lg border bg-white p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{g.title}</h2>
              <span className="text-xs text-gray-500">{tasks.filter(t => t.status === g.key).length}</span>
            </div>
            <div className="mt-3 space-y-2">
              {tasks.filter(t => t.status === g.key).map(t => (
                <div key={t.id} className="rounded border p-3 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{t.title}</div>
                      <div className="text-xs text-gray-500">{t.projectName}</div>
                    </div>
                    {t.blocked && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700">Blocked</span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                    <div>Assignee: <span className="font-medium">{t.assignee}</span></div>
                    <div className={`px-1.5 py-0.5 rounded ${t.priority === 'high' ? 'bg-red-100 text-red-700' : t.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{t.priority}</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    {g.key !== 'backlog' && (
                      <button onClick={() => updateTaskStatus(t.id, 'backlog')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Backlog</button>
                    )}
                    {g.key !== 'in_progress' && (
                      <button onClick={() => updateTaskStatus(t.id, 'in_progress')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">In Progress</button>
                    )}
                    {g.key !== 'review' && (
                      <button onClick={() => updateTaskStatus(t.id, 'review')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Review</button>
                    )}
                    {g.key !== 'done' && (
                      <button onClick={() => updateTaskStatus(t.id, 'done')} className="text-xs px-2 py-1 rounded border hover:bg-gray-100">Done</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
