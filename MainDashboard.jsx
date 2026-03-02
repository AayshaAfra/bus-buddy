import React, { useState } from 'react';
import { Bus, AlertTriangle, Users, Plus, ChevronDown } from 'lucide-react';
import StatCard from './StatCard';
import MapOverview from './MapOverview';
import ActivityFeed from './ActivityFeed';

const maintenanceLogs = [
  { bus: 'Bus No: 123bd', days: 7,  urgency: 'high'   },
  { bus: 'Bus No: 123bd', days: 6,  urgency: 'medium' },
  { bus: 'Bus No: 123bd', days: 4,  urgency: 'low'    },
];

const filterOptions = ['All Buses', 'Active', 'Inactive', 'Maintenance'];

export default function MainDashboard() {
  const [filter, setFilter] = useState('All Buses');
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50">
      {/* Action bar */}
      <div className="flex items-center gap-3 px-6 py-4">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-teal-200 transition-all duration-150 active:scale-95">
          <Plus size={16} />
          Add New Trip
        </button>
      </div>

      {/* Stats row + right sidebar */}
      <div className="flex gap-5 px-6 pb-5">
        {/* Left: stats + map */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          {/* Stat cards */}
          <div className="flex gap-4">
            <StatCard
              title="Active Trips Now"
              value="4"
              icon={Bus}
              iconBg="bg-teal-500"
              badge={{ label: '98% On Time', dot: true }}
              badgeVariant="success"
              link="View Live"
            />
            <StatCard
              title="Safety Alerts"
              value="3"
              icon={AlertTriangle}
              iconBg="bg-amber-500"
              badge={{ label: '2 Critical', dot: true }}
              badgeVariant="danger"
              link="Review Alert"
            />
            <StatCard
              title="Absent Students"
              value="0"
              icon={Users}
              iconBg="bg-blue-500"
              badge={{ label: '+12% vs Avg', dot: false }}
              badgeVariant="info"
              link="View Students"
            />
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800 text-sm">Map Overview</h2>
              <div className="relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 text-xs text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50 transition"
                >
                  {filter}
                  <ChevronDown size={12} />
                </button>
                {showFilter && (
                  <div className="absolute right-0 top-8 bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1 min-w-[140px]">
                    {filterOptions.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setFilter(opt); setShowFilter(false); }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition ${filter === opt ? 'text-teal-600 font-semibold' : 'text-slate-600'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{ height: '360px' }}>
              <MapOverview />
            </div>
          </div>
        </div>

        {/* Right sidebar widgets */}
        <div className="w-64 flex-shrink-0 flex flex-col gap-4">
          {/* Vehicle Maintenance Log */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 text-sm mb-4">Vehicle Maintenance log</h3>
            <div className="space-y-3">
              {maintenanceLogs.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-700">{item.bus}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
                    ${item.urgency === 'high'   ? 'text-red-600 bg-red-50' :
                      item.urgency === 'medium' ? 'text-orange-600 bg-orange-50' :
                                                  'text-amber-600 bg-amber-50'}`}>
                    {item.days} days Due
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 text-xs text-teal-500 font-medium hover:text-teal-600 transition-colors">
              View Students →
            </button>
          </div>

          {/* Recent Activity */}
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
