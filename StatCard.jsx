import React from 'react';
import StatusBadge from './StatusBadge';

export default function StatCard({ title, value, icon: Icon, iconBg, badge, badgeVariant, link }) {
  return (
    <div className="stat-card bg-white rounded-2xl p-5 flex-1 min-w-0 shadow-sm border border-slate-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <StatusBadge label={badge.label} variant={badgeVariant} dot={badge.dot} />
        <button className="text-xs text-teal-500 font-medium hover:text-teal-600 transition-colors">
          {link} →
        </button>
      </div>
    </div>
  );
}
