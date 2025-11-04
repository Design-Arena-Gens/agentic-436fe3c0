'use client';

import { useSampleData } from '@/data/sample-data';

export default function ProjectsPage() {
  const { projects } = useSampleData();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.client}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                p.status === 'active' ? 'bg-green-100 text-green-700' :
                p.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {p.status}
              </span>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              {p.description}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-500">Tasks</div>
              <div className="font-medium">{p.metrics.completedTasks}/{p.metrics.totalTasks}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
