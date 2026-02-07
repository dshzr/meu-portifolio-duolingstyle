
import React from 'react';


interface UnitHeaderProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

const UnitHeader: React.FC<UnitHeaderProps> = ({ title, subtitle, colorClass }) => (
  <div className={`w-full p-8 md:p-10 ${colorClass} text-white rounded-[2.5rem] border-b-[8px] border-black/20 mb-16 flex justify-between items-center overflow-hidden relative shadow-lg group hover:scale-[1.01] transition-transform min-h-[140px] md:min-h-[160px]`}>
    {/* Abstract dynamic background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
       <div className="absolute right-20 bottom-0 w-20 h-20 bg-black rounded-full blur-2xl"></div>
    </div>

    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        
        <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase font-outfit">{title}</h2>
      </div>
      <p className="text-white/90 font-bold text-sm md:text-base max-w-md leading-tight">{subtitle}</p>
    </div>
    
    <div className="opacity-20 transform scale-150 rotate-12 hidden md:block group-hover:rotate-[30deg] transition-transform duration-700">
      
    </div>
  </div>
);

export default UnitHeader;
