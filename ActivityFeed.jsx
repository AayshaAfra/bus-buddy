import React from 'react';

const activities = [
  { id: 1, date: '2024-02-32', bus: 'Bus_344', event: 'started trip',   time: '7:00AM', color: 'bg-emerald-500' },
  { id: 2, date: '2024-02-32', bus: 'Bus_354', event: 'started trip',   time: '7:30AM', color: 'bg-emerald-500' },
  { id: 3, date: '2024-02-32', bus: 'Bus_354', event: 'reached trip',   time: '1:30PM', color: 'bg-blue-500'    },
  { id: 4, date: '2024-02-32', bus: 'Bus_354', event: 'reached trip',   time: '1:30PM', color: 'bg-blue-500'    },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
      <h3 className="font-semibold text-slate-800 text-sm mb-4">Recent Activity</h3>
      <div className="space-y-0">
        {activities.map((a, i) => (
          <div key={a.id} className={`activity-item relative flex items-start gap-3 pb-4 ${i === activities.length - 1 ? '' : ''}`}>
            <div className="activity-line relative mt-1 flex-shrink-0">
              <span className={`w-3.5 h-3.5 rounded-full ${a.color} block ring-2 ring-white`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-slate-400">{a.date} </span>
                <span className="font-semibold text-teal-600">{a.bus}</span>
                {' '}{a.event} at {a.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
