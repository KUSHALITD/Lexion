
import React, { useEffect, useState } from 'react';
import Header from './Header';
import { UserInfo, ScoreBreakdown } from '../types';
import { generateContentAdvice, simulateEmailTrigger } from '../geminiService';

interface ResultsPageProps {
  userInfo: UserInfo;
  breakdown: ScoreBreakdown[];
  overallScore: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ userInfo, breakdown, overallScore }) => {
  const [advice, setAdvice] = useState<{
    resultSummary: string;
    considerations: string[];
    nextSteps: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    async function init() {
      const data = await generateContentAdvice(userInfo, breakdown, overallScore);
      setAdvice(data);
      // Trigger notification to admin and report to user
      await simulateEmailTrigger(userInfo, breakdown, overallScore);
      setEmailSent(true);
      setLoading(false);
    }
    init();
  }, [userInfo, breakdown, overallScore]);

  const getStatusPillColor = (percent: number) => {
    if (percent >= 80) return 'bg-green-500';
    if (percent >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPercentageColor = (percent: number) => {
    if (percent >= 80) return 'text-green-600';
    if (percent >= 50) return 'text-yellow-600';
    return 'text-[#9B3039]';
  };

  // Calculate SVG stroke offset
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (overallScore / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col pb-24 bg-white font-sans">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 lg:py-16">
        {/* Header Section */}
        <div className="mb-14">
           <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Thanks <span className="text-[#9B3039]">{userInfo.name}</span>,<br/>
            Here is your content health score.
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-gray-400 text-lg">
              A comprehensive strategic breakdown for <span className="text-gray-900 font-bold">{userInfo.companyName}</span>.
            </p>
            {emailSent && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Report Emailed to {userInfo.email}
              </span>
            )}
          </div>
        </div>

        {/* Main Score & Chart Row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">
          
          {/* Left Column: Strategic Assessment Card */}
          <div className="bg-[#fcf8f8] p-10 lg:p-12 rounded-[3rem] border border-red-50 relative flex flex-col justify-between shadow-sm">
             <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#9B3039] flex items-center justify-center text-white font-black text-xl shadow-xl">
                      S
                  </div>
                  <div>
                      <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Strategic Assessment</h2>
                      <p className="text-xl font-black text-gray-800">
                        {overallScore >= 80 ? 'Premium Content Ecosystem' : overallScore >= 50 ? 'Foundational Content Presence' : 'Growth Potential Identification'}
                      </p>
                  </div>
                </div>

                {loading ? (
                  <div className="space-y-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="space-y-3 mt-10">
                        <div className="h-12 bg-gray-100 rounded-2xl"></div>
                        <div className="h-12 bg-gray-100 rounded-2xl"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
                      {advice?.resultSummary}
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Key Strategic Pillars</h3>
                      {advice?.considerations.map((c, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm items-center hover:translate-x-1 transition-transform">
                          <div className="w-7 h-7 rounded-xl bg-red-50 text-[#9B3039] flex items-center justify-center shrink-0 font-black text-xs">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 text-[12px] font-bold leading-tight">{c}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Priority Next Step</h3>
                      <p className="text-[#9B3039] font-black text-xl italic leading-tight">
                        "{advice?.nextSteps}"
                      </p>
                    </div>
                  </div>
                )}
             </div>

            <div className="mt-12 flex flex-wrap gap-6 pt-8 border-t border-gray-100">
               <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-sm"></div>
                 <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Growth Needed</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm"></div>
                 <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Proficient</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-sm"></div>
                 <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Mastery</span>
               </div>
            </div>
          </div>

          {/* Right Column: Prominent Health Score Display */}
          <div className="flex flex-col items-center justify-center space-y-12 py-10">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              {/* Custom High-Visibility Circular Progress */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="16" />
                <circle 
                  cx="100" 
                  cy="100" 
                  r={radius} 
                  fill="none" 
                  stroke={overallScore >= 80 ? '#10B981' : overallScore >= 50 ? '#F59E0B' : '#9B3039'} 
                  strokeWidth="16" 
                  strokeDasharray={circumference} 
                  strokeDashoffset={offset} 
                  strokeLinecap="round" 
                  className="transition-all duration-1500 ease-out" 
                />
              </svg>
              
              {/* Centered Score - Guaranteed visibility with high contrast */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-gray-400 text-[11px] font-black uppercase tracking-[0.4em] mb-2">Health Index</span>
                <div className="flex items-baseline">
                  <span className="text-gray-900 text-[7rem] font-black tracking-tighter leading-none">
                    {overallScore}
                  </span>
                  <span className="text-[#9B3039] text-3xl font-black ml-1">%</span>
                </div>
              </div>
            </div>
            
            <button className="w-full max-w-sm px-10 py-5 bg-[#9B3039] text-white rounded-[2rem] font-black text-sm tracking-widest uppercase hover:bg-[#7a262d] transition-all shadow-[0_20px_40px_rgba(155,48,57,0.25)] hover:shadow-[0_25px_50px_rgba(155,48,57,0.35)] hover:-translate-y-1">
              Book Strategy Session
            </button>
          </div>
        </div>

        {/* Factors Breakdown Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {breakdown.map((b) => (
            <div key={b.category} className="group p-10 rounded-[3rem] bg-white border border-gray-100 hover:border-[#9B3039]/30 transition-all hover:shadow-[0_40px_80px_-20px_rgba(155,48,57,0.08)] flex flex-col min-h-[340px]">
              <div className="flex justify-between items-start mb-10">
                <div className={`text-6xl font-black ${getPercentageColor(b.percentage)} tracking-tighter`}>
                  {b.percentage}%
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${getStatusPillColor(b.percentage)} shadow-md`}>
                  {b.status}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-5 group-hover:text-[#9B3039] transition-colors leading-tight">
                {b.label}
              </h3>
              
              <p className="text-gray-400 text-[12px] leading-relaxed line-clamp-4 font-bold opacity-70">
                {b.description}
              </p>
              
              <div className="mt-auto pt-8 flex items-center gap-2">
                 <span className="text-[10px] font-black text-[#9B3039] uppercase tracking-widest group-hover:translate-x-1 transition-transform">Detailed Review →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Banner */}
        <div className="p-12 lg:p-24 rounded-[4rem] bg-[#9B3039] text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
              <div className="text-[25rem] font-black -mr-32 -mt-32">L</div>
           </div>
           
           <div className="relative z-10 text-center lg:text-left">
             <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">Elevate your content<br/>authority today.</h2>
             <p className="text-red-100 text-xl max-w-xl font-bold opacity-80 leading-relaxed">
               Ready to transition from generic output to market leadership? Let's discuss your customized roadmap.
             </p>
           </div>
           
           <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0">
              <button className="px-14 py-6 bg-white text-[#9B3039] rounded-[2rem] font-black text-sm tracking-widest uppercase shadow-2xl hover:bg-red-50 transition-all hover:-translate-y-1">
                Book a Free Call
              </button>
           </div>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
