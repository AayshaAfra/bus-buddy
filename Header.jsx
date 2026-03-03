import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';

export default function Header({ title = 'DashBoard' }) {
  const [search, setSearch] = useState('');

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
      <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
        {title}
      </h1>

      <div className="flex items-center gap-4">
      
        <div className="relative hidden md:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search routes, vehicles, students..."
            className="pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-full w-64
                       focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition"
          />
        </div>

      
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition border border-slate-200">
          <Bell size={16} className="text-slate-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
            SD
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-800 leading-tight">Sara Desan</p>
            <p className="text-xs text-slate-400">Transport Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
