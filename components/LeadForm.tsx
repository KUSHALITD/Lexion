
import React, { useState } from 'react';
import Header from './Header';
import { UserInfo } from '../types';

interface LeadFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInfo>({
    name: '',
    fullName: '',
    companyName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f8]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full">
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(155,48,57,0.1)] border border-red-50 relative overflow-hidden">
            {/* Subtle branding element inside form */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <div className="text-9xl font-black">L</div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight leading-tight">
                Benchmark your <br/><span className="text-[#9B3039]">Content Authority.</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Enter your details to generate your customized health report.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-[#9B3039]/20 focus:border-[#9B3039] outline-none transition-all text-gray-800 placeholder:text-gray-300"
                      placeholder="Jane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-[#9B3039]/20 focus:border-[#9B3039] outline-none transition-all text-gray-800 placeholder:text-gray-300"
                      placeholder="Jane Cooper"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Organization</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-[#9B3039]/20 focus:border-[#9B3039] outline-none transition-all text-gray-800 placeholder:text-gray-300"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Business Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-[#9B3039]/20 focus:border-[#9B3039] outline-none transition-all text-gray-800 placeholder:text-gray-300"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-5 bg-[#9B3039] text-white rounded-2xl font-black text-lg tracking-widest uppercase hover:bg-[#7a262d] transition-all shadow-[0_15px_30px_rgba(155,48,57,0.2)] hover:shadow-[0_20px_40px_rgba(155,48,57,0.3)]"
                  >
                    Start Audit
                  </button>
                  <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                    Privacy Assured. Your data stays at Lexiconn.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadForm;
