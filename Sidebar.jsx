import React, { useState } from 'react';
import {
  LayoutDashboard, Radio, Route, Users, Truck,
  AlertTriangle, BarChart2, Settings, Bus
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard',             active: true },
  { icon: Radio,           label: 'Live Operation' },
  { icon: Route,           label: 'Route & Trip Management' },
  { icon: Users,           label: 'Student Management' },
  { icon: Truck,           label: 'Vehicle & Crew Management' },
  { icon: AlertTriangle,   label: 'Alerts & Incidents Review' },
  { icon: BarChart2,       label: 'Reporting & Analytics' },
  { icon: Settings,        label: 'Settings' },
];

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside
      className="sidebar-scroll flex flex-col w-60 min-h-screen overflow-y-auto"
      style={{ background: '#1a2332' }}
    >
      
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
        <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
          <Bus size={18} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>Bus Buddy</p>
          <p className="text-slate-400 text-xs">Admin</p>
        </div>
      </div>

      
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ icon: Icon, label }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group
                ${isActive
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <Icon size={16} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
              <span className="text-sm font-medium truncate">{label}</span>
            </button>
          );
        })}
      </nav>

      
      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs text-slate-400">All systems Operational</span>
        </div>
      </div>
    </aside>
  );
}
