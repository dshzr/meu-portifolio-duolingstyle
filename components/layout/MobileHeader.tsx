
import React from 'react';
import { Flame, Heart } from 'lucide-react';

const MobileHeader: React.FC = () => {
  return (
    <div className="flex md:hidden sticky top-0 bg-white/95 backdrop-blur-sm z-30 items-center justify-between border-b-2 border-[#e5e5e5] px-4 py-4 -mx-4 mb-8">
       <span className="text-2xl font-black text-[#58cc02]">wellsantiago</span>
       <div className="flex gap-4">
          <div className="flex items-center gap-1 text-[#ff9600] font-black">
            <Flame size={20} fill="#ff9600" /> 365
          </div>
          <div className="flex items-center gap-1 text-[#ff4b4b] font-black">
            <Heart size={20} fill="#ff4b4b" /> 5
          </div>
       </div>
    </div>
  );
};

export default MobileHeader;
