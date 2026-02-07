
import React from 'react';
import { Target, CheckCircle2, Rocket, Zap, Flag, Briefcase, Code2, Compass } from 'lucide-react';
import { EXPERIENCES } from '../../constants';
import { Experience } from '../../types';
import UnitHeader from '../ui/UnitHeader';

interface PathNodeProps {
  index: number;
  experience: Experience;
  isLast: boolean;
}

const PathNode: React.FC<PathNodeProps> = ({ index, experience, isLast }) => {
  const isLeft = index % 2 === 0;
  
  // Alternar ícones e cores conforme o progresso
  const getStageStyle = (idx: number) => {
    const stage = idx % 5;
    switch(stage) {
      case 0: return { color: 'bg-[#58cc02]', shadow: 'border-[#46a302]', icon: Compass };
      case 1: return { color: 'bg-[#1cb0f6]', shadow: 'border-[#1899d6]', icon: Zap };
      case 2: return { color: 'bg-[#ff9600]', shadow: 'border-[#cc7800]', icon: Code2 };
      case 3: return { color: 'bg-[#ff4b4b]', shadow: 'border-[#d33131]', icon: Briefcase };
      default: return { color: 'bg-[#ce82ff]', shadow: 'border-[#a331d3]', icon: Rocket };
    }
  };

  const style = getStageStyle(index);
  const Icon = style.icon;

  return (
    <div className={`flex flex-col items-center mb-24 relative w-full ${isLeft ? 'md:pr-48' : 'md:pl-48'}`}>
      
      {/* Dynamic Path Connecting Line */}
      {!isLast && (
        <div className={`absolute top-20 left-1/2 -translate-x-1/2 h-24 w-4 bg-[#e5e5e5] -z-10 rounded-full overflow-hidden`}>
           <div className={`w-full h-full ${style.color} opacity-20`}></div>
        </div>
      )}

      <div className="relative group">
        {/* Animated Rings */}
        <div className={`absolute -inset-4 ${style.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity animate-pulse`}></div>
        
        <div className={`w-24 h-24 md:w-32 md:h-32 ${style.color} rounded-[2.5rem] border-b-8 ${style.shadow} flex items-center justify-center text-white shadow-xl transition-all hover:scale-110 active:translate-y-2 active:border-b-0 cursor-pointer relative z-10`}>
          <Icon size={48} fill="white" className="group-hover:rotate-12 transition-transform" />
        </div>
        
        {/* Experience Bubble / Tooltip STYLE UPGRADE */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-full ml-10' : 'right-full mr-10'} w-64 md:w-80 group-hover:opacity-100 transition-all z-20 pointer-events-none group-hover:pointer-events-auto opacity-100 md:opacity-0`}>
          <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] p-6 rounded-[2rem] shadow-2xl relative translate-y-2 group-hover:translate-y-0 transition-transform">
            {/* Arrow */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-left-3 rotate-45' : '-right-3 rotate-45'} w-6 h-6 bg-white border-l-2 border-b-2 border-[#e5e5e5] hidden md:block`}></div>
            
            <div className={`${style.color.replace('bg-', 'text-')} font-black uppercase text-xs mb-2 flex items-center gap-2 tracking-widest`}>
              <CheckCircle2 size={14} /> Missão Completada
            </div>
            <h4 className="font-black text-slate-800 text-lg leading-tight uppercase mb-1">{experience.role}</h4>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-bold mb-3">
              <span className="w-2 h-2 bg-[#afafaf] rounded-full"></span>
              {experience.company}
            </div>
            {experience.description && (
               <p className="text-xs text-slate-400 font-bold leading-relaxed mb-3">
                 {experience.description}
               </p>
            )}
            <div className="inline-block px-3 py-1 bg-[#f7f7f7] text-[#afafaf] rounded-full text-[10px] font-black uppercase tracking-wider">
              {experience.period}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-white border-2 border-[#e5e5e5] border-b-4 px-6 py-2 rounded-2xl font-black text-slate-600 uppercase tracking-widest text-xs md:text-sm shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
          {experience.company}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const reversedExperiences = [...EXPERIENCES].reverse();
  
  return (
    <section id="experience" className="max-w-2xl mx-auto pt-4 scroll-mt-24">
      <UnitHeader 
        title="Unidade 2: Missões de Carreira" 
        subtitle="O caminho trilhado para a maestria técnica" 
        colorClass="bg-[#1cb0f6]"
      />
      
      <div className="flex flex-col items-center relative mb-32 pt-10">
        {/* Main background path line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[#e5e5e5] -translate-x-1/2 -z-20 rounded-full"></div>
        
        {reversedExperiences.map((exp, idx) => (
          <PathNode 
            key={idx} 
            index={idx} 
            experience={exp} 
            isLast={idx === reversedExperiences.length - 1} 
          />
        ))}
        
        {/* Final Reward Checkpoint */}
        <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#e5e5e5] rounded-full flex items-center justify-center text-white border-b-4 border-[#afafaf] animate-pulse">
                <Flag size={32} fill="white" />
            </div>
            <div className="mt-4 font-black text-[#afafaf] uppercase text-xs tracking-widest">Próximo Nível: 2026</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
