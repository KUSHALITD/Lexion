
import React from 'react';
import Header from './Header';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-1 relative">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#9B3039]/5 text-[#9B3039] rounded-full border border-[#9B3039]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B3039] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B3039]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Content Maturity Audit</span>
            </div>

            <h1 className="text-6xl lg:text-[5.5rem] font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
              Turn Your Content Into a <span className="text-[#9B3039]">Revenue Engine.</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
              Measure your brand authority across 5 core factors. We help you move beyond "brochureware" into high-impact strategic content.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={onStart}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#9B3039] text-white rounded-2xl text-lg font-bold hover:bg-[#7a262d] transition-all shadow-[0_20px_40px_rgba(155,48,57,0.2)] hover:shadow-[0_25px_50px_rgba(155,48,57,0.3)] hover:-translate-y-1"
              >
                Check Your Content Health Score
              </button>
              <div className="text-left border-l pl-6 border-gray-100">
                <div className="text-sm font-bold text-gray-900">45-Second Audit</div>
                <div className="text-xs text-gray-400">Customized roadmap included.</div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-black text-gray-900">5+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Core Factors</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">100%</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Strategic</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">No. 1</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Agency Standard</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative z-10 bg-white p-8 lg:p-14 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-gray-50 w-full max-w-[550px]">
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 bg-[#9B3039] text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl rotate-12 z-20">
                Strategic Insight
              </div>
              
              <div className="relative flex items-center justify-center p-4">
                {/* Custom SVG Ring for better control and visibility */}
                <svg className="w-full h-auto max-w-[320px]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#9B3039" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="84" strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                </svg>
                
                {/* Centered Score Label using Absolute Positioning for guaranteed visibility */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Average Score</span>
                  <span className="text-[#9B3039] text-7xl font-black leading-none">70</span>
                  <span className="text-[#9B3039] text-2xl font-black ml-1 mt-1">%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-5 rounded-3xl bg-gray-50 flex flex-col gap-1.5 border border-gray-100 shadow-sm hover:border-[#9B3039]/20 transition-all">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Dimension 01</span>
                  <span className="font-bold text-gray-800 text-sm">Content Hygiene</span>
                </div>
                <div className="p-5 rounded-3xl bg-gray-50 flex flex-col gap-1.5 border border-gray-100 shadow-sm hover:border-[#9B3039]/20 transition-all">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Dimension 02</span>
                  <span className="font-bold text-gray-800 text-sm">Sales Tools</span>
                </div>
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -bottom-10 -right-6 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-[220px] hidden lg:block z-30 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-7 h-7 rounded-full bg-red-50 border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-black text-[#9B3039]">L</div>)}
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Strategic Audit</div>
              </div>
              <p className="text-[11px] font-bold text-gray-600 leading-relaxed italic">
                "Benchmark your brand authority in under a minute."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
