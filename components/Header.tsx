
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-8 flex items-center justify-between border-b bg-white">
      <div className="flex items-center gap-2">
        <div className="font-bold text-2xl tracking-tighter flex items-center">
          <span className="text-[#9B3039]">Lexiconn</span>
          <div className="ml-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="hidden md:block text-xs text-gray-400 font-bold uppercase tracking-widest">
        Content Strategy & Consulting
      </div>
    </header>
  );
};

export default Header;
