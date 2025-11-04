'use client';

import StatCard from '@/components/StatCard';
import KanbanBoard from '@/components/KanbanBoard';
import { useSampleData } from '@/data/sample-data';

export default function DashboardPage() {
  const { tasks, projects } = useSampleData();

  const stats = [
    { name: 'Active Projects', value: projects.filter(p => p.status !== 'archived').length },
    { name: 'Tasks In Progress', value: tasks.filter(t => t.status === 'in_progress').length },
    { name: 'Due This Week', value: tasks.filter(t => t.dueTag === 'this_week').length },
    { name: 'Blocked', value: tasks.filter(t => t.blocked).length },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.name} label={s.name} value={String(s.value)} />
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Team Kanban</h2>
        <KanbanBoard />
      </section>
    </div>
  );
}
