import React, { useState } from 'react';

export default function RepairTechDashboard() {
  const [activeTab, setActiveTab] = useState('queue');
  const [selectedJob, setSelectedJob] = useState(null);

  // Core metrics for the active technician workbench
  const techMetrics = [
    { label: "My Active Bench Queue", value: "5 Devices", change: "3 Critical Priority", isUrgent: true },
    { label: "Completed Repairs (This Month)", value: "48 Jobs", change: "96.2% Success Rate", isUrgent: false },
    { label: "Awaiting Replacement Parts", value: "3 Tickets", change: "Ordered from Warehouse", isUrgent: false }
  ];

  const repairJobs = [
    { id: "REP-9021", device: "iPhone 15 Pro Max", issue: "Cracked AMOLED & FaceID Failure", customer: "Kevine G.", status: "In Progress", priority: "High" },
    { id: "REP-8840", device: "MacBook Pro M3 14\"", issue: "Liquid damage / Board short circuit", customer: "Olivier M.", status: "Diagnostics", priority: "Critical" },
    { id: "REP-9102", device: "Samsung Galaxy S24 Ultra", issue: "Battery swelling / Replacement", customer: "Alain R.", status: "Awaiting Parts", priority: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-[#090A10] text-[#A3AED0] font-sans p-6 flex flex-col justify-between">
      
      {/* Top Professional Tech Header */}
      <header className="flex items-center justify-between mb-6 bg-[#111322] p-4 rounded-2xl border border-purple-500/10 shadow-xl shadow-black/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#6366F1] to-[#A855F7] rounded-xl flex items-center justify-center font-bold text-white text-md shadow-lg shadow-purple-500/20">
            🔧
          </div>
          <div>
            <h1 className="font-bold leading-tight text-white text-md">Hardware Workbench</h1>
            <p className="text-[11px] text-purple-400 font-medium">Diagnostic Station: Central Hub</p>
          </div>
        </div>

        {/* Global Hardware Tracker */}
        <div className="relative hidden w-80 md:block">
          <input 
            type="text" 
            placeholder="Search ticket #, IMEI, or component barcode..." 
            className="w-full bg-[#181A2A] border border-purple-500/10 rounded-xl py-2 px-4 text-xs text-slate-200 focus:outline-none focus:border-[#A855F7] transition-all"
          />
        </div>

        {/* Tech Identity Block */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A855F7] to-pink-500 flex items-center justify-center font-bold text-xs text-white">
              TN
            </div>
            <div className="hidden text-left lg:block">
              <p className="text-xs font-semibold text-white">Tech Ntwari</p>
              <p className="text-[10px] text-purple-400 mt-0.5">Senior Diagnostics Engineer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Framework Workspace Grid Split */}
      <div className="grid items-start grid-cols-1 gap-6 xl:grid-cols-5 grow">
        
        {/* Left Side Workspace Navigation */}
        <aside className="bg-[#111322] p-4 rounded-2xl border border-purple-500/10 shadow-sm space-y-1 xl:col-span-1">
          <p className="text-[10px] uppercase font-bold tracking-wider text-purple-400 px-3 mb-2">Workbench Tasks</p>
          
          <button 
            onClick={() => setActiveTab('queue')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'queue' ? 'bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white shadow-md' : 'text-slate-400 hover:bg-[#181A2A] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" /></svg>
            Active Tickets ({repairJobs.length})
          </button>

          <button 
            onClick={() => setActiveTab('components')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'components' ? 'bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white' : 'text-slate-400 hover:bg-[#181A2A] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            Bench Parts Vault
          </button>
        </aside>

        {/* Primary Workspace Viewport */}
        <main className="space-y-6 xl:col-span-4">
          
          {/* Top Analytical Aggregates Block */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {techMetrics.map((m, idx) => (
              <div key={idx} className="bg-[#111322] p-4 rounded-2xl border border-purple-500/10 shadow-sm relative overflow-hidden">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">{m.label}</span>
                <p className="mt-1 font-mono text-lg font-bold text-white">{m.value}</p>
                <span className={`text-[10px] font-semibold block mt-0.5 ${m.isUrgent ? 'text-purple-400' : 'text-slate-400'}`}>
                  {m.change}
                </span>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none bg-purple-500/5 blur-xl" />
              </div>
            ))}
          </div>

          {/* TAB 1: ACTIVE TICKETS QUEUE */}
          {activeTab === 'queue' && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              
              {/* Main Ticket Processing Interface */}
              <div className="bg-[#111322] p-5 rounded-2xl border border-purple-500/10 shadow-sm lg:col-span-2 space-y-4">
                <h3 className="text-xs font-bold tracking-wider text-white uppercase">Live Workbench Repair Queue</h3>
                
                <div className="space-y-2.5">
                  {repairJobs.map((job) => (
                    <div 
                      key={job.id} 
                      onClick={() => setSelectedJob(job)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${selectedJob?.id === job.id ? 'bg-[#181A2A] border-[#A855F7]' : 'bg-[#141625]/60 border-purple-500/5 hover:border-purple-500/20'}`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white">{job.id}</span>
                          <span className="text-[11px] font-semibold text-purple-300">{job.device}</span>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${job.priority === 'Critical' ? 'bg-rose-500/10 text-rose-400' : job.priority === 'High' ? 'bg-purple-500/10 text-purple-400' : 'bg-slate-800 text-slate-400'}`}>
                            {job.priority}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-400">{job.issue}</p>
                      </div>

                      <div className="font-mono text-left sm:text-right">
                        <span className="text-[10px] block text-slate-500">Client: {job.customer}</span>
                        <span className="text-xs font-bold text-white">{job.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Content Block: Quick Status Update Panel */}
              <div className="bg-[#111322] p-5 rounded-2xl border border-purple-500/10 shadow-sm space-y-4">
                <h3 className="text-xs font-bold tracking-wider text-white uppercase">Diagnostic Updates</h3>
                {selectedJob ? (
                  <div className="space-y-4">
                    <div className="p-3 bg-[#181A2A] rounded-xl border border-purple-500/10">
                      <span className="text-[10px] text-slate-500 block font-mono">Selected Ticket</span>
                      <p className="text-xs font-bold text-white mt-0.5">{selectedJob.id} — {selectedJob.device}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Transition Status State</span>
                      <div className="grid grid-cols-2 gap-2">
                        {['In Diagnostics', 'Waiting on Parts', 'Testing Phases', 'Ready for Pickup'].map((state) => (
                          <button key={state} className="bg-[#141625] border border-purple-500/5 hover:border-[#A855F7]/40 text-[11px] font-semibold text-slate-300 p-2.5 rounded-xl text-left transition">
                            {state}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="py-8 text-xs italic text-center text-slate-500">Select an active hardware ticket from the queue to broadcast diagnostic updates.</p>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: REPLACEMENT PARTS ARCHITECTURE */}
          {activeTab === 'components' && (
            <div className="bg-[#111322] p-5 rounded-2xl border border-purple-500/10 shadow-sm space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">Localized Hardware Spare Components</h3>
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#181A2A] text-slate-400 font-semibold">
                      <th className="p-3">Component Variant Mapping</th>
                      <th className="p-3">Compatible Hardware Architecture</th>
                      <th className="p-3 text-right">Available Unit Reserve</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono divide-y divide-purple-500/5 text-slate-300">
                    <tr className="hover:bg-[#141625]">
                      <td className="p-3 font-semibold text-white">OLED Screen Unit Assembly</td>
                      <td className="p-3 text-purple-300">iPhone 15 Pro Max</td>
                      <td className="p-3 font-bold text-right text-white">4 Units</td>
                    </tr>
                    <tr className="hover:bg-[#141625]">
                      <td className="p-3 font-semibold text-white">5000mAh Lithium Cell pack</td>
                      <td className="p-3 text-purple-300">Samsung S24 Ultra</td>
                      <td className="p-3 font-bold text-right text-purple-400">1 Unit Left</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Ground Technical Audit Log Footer */}
      <footer className="mt-8 pt-4 border-t border-purple-500/5 flex justify-between text-[11px] text-slate-600 font-mono">
        <span>&copy; 2026 ElecPOS Repair Terminal. PostgreSQL Session Isolation Active.</span>
        <span>Bench-Station: KGL-BENCH-02</span>
      </footer>
    </div>
  );
}