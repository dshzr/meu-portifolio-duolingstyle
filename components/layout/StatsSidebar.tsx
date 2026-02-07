
import React from 'react';
import { Heart, Flame, Zap, Github, Linkedin, Trophy, Target } from 'lucide-react';
import DuoButton from '../ui/DuoButton';
import { SKILLS } from '../../constants';

interface StatsSidebarProps {
  onContactClick: () => void;
}

const StatsSidebar: React.FC<StatsSidebarProps> = ({ onContactClick }) => {
  return (
    <aside className="hidden lg:block w-80 p-8 sticky top-0 h-screen overflow-y-auto">
      <div className="space-y-6">
        
        {/* User Card with Mini Avatar */}
        <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2.5rem] p-6 shadow-sm relative overflow-hidden group hover:border-[#58cc02] transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
            <Zap size={60} fill="#58cc02" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#1cb0f6] rounded-2xl flex items-center justify-center border-2 border-white shadow-lg overflow-hidden shrink-0">
               <img src="https://media.licdn.com/dms/image/v2/D4D03AQE_R1tX2T8K8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715694833292?e=1744243200&v=beta&t=L6g6fV6v3qE3V3V3V3V3V3V3V3V3V3V3V3V3V3V3V3E" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-slate-800 text-sm tracking-tight">wellsantiago</h4>
              <div className="flex items-center gap-1">
                 <div className="w-2 h-2 bg-[#58cc02] rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase">Pro Player</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-[#e5e5e5] border-b-4 rounded-2xl p-3 flex flex-col items-center group cursor-default hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-1 text-[#ff9600] font-black text-lg group-hover:scale-110 transition-transform">
                <Flame fill="#ff9600" size={20} /> 365
              </div>
              <div className="text-[8px] uppercase font-black text-slate-400 mt-1 tracking-widest text-center">Day Streak</div>
            </div>
            <div className="border-2 border-[#e5e5e5] border-b-4 rounded-2xl p-3 flex flex-col items-center group cursor-default hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-1 text-[#1cb0f6] font-black text-lg group-hover:scale-110 transition-transform">
                <Trophy fill="#1cb0f6" size={20} /> 50+
              </div>
              <div className="text-[8px] uppercase font-black text-slate-400 mt-1 tracking-widest text-center">Projects</div>
            </div>
          </div>
        </div>

        {/* Energy Status Card */}
        <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2.5rem] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <div className="flex flex-col">
               <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Health</h4>
               <span className="text-lg font-black text-slate-800 tracking-tighter uppercase">Energia</span>
             </div>
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Heart key={i} size={16} fill="#ff4b4b" color="#ff4b4b" className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}
             </div>
          </div>
          
          <div className="space-y-4 mb-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-[#58cc02]/10 text-[#58cc02] rounded-lg">
                   <Target size={16} />
                </div>
                <div className="flex-1">
                   <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                      <span>Monthly Goal</span>
                      <span>85%</span>
                   </div>
                   <div className="h-2 w-full bg-[#f0f0f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#58cc02] w-[85%] rounded-full shadow-[0_0_10px_rgba(88,204,2,0.5)]"></div>
                   </div>
                </div>
             </div>
          </div>

          <DuoButton color="green" className="w-full text-xs py-4 shadow-lg group" onClick={onContactClick}>
            <span className="inline-flex items-center gap-2">
              
              Enviar Convite
            </span>
          </DuoButton>
        </div>

        {/* Top Tech Leagues */}
        <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2.5rem] p-6 shadow-sm">
          <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest flex items-center justify-between">
            Top Leagues <Trophy size={14} />
          </h4>
          <div className="space-y-5">
            {SKILLS.slice(0, 4).map((skill, idx) => (
              <div key={skill.name} className="flex items-center gap-4 group">
                <div className="relative">
                   <div className={`w-10 h-10 ${idx === 0 ? 'bg-[#ffc800]' : 'bg-slate-100'} rounded-xl flex items-center justify-center font-black ${idx === 0 ? 'text-white' : 'text-slate-400'} group-hover:scale-110 transition-transform shadow-sm`}>
                      {idx + 1}
                   </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] font-black uppercase mb-1 tracking-tighter">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className={`${idx === 0 ? 'text-[#ff9600]' : 'text-[#58cc02]'} flex items-center gap-1`}>
                        Diamante
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[#f0f0f0] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${idx === 0 ? 'bg-[#ffc800]' : 'bg-[#58cc02]'} rounded-full transition-all duration-1000`} 
                      style={{ width: `${100 - (idx * 5)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Terminal */}
        <div className="flex justify-center gap-6 pt-4">
           {[
             { Icon: Github, href: "https://github.com/wellsant", color: "hover:text-black" },
             { Icon: Linkedin, href: "https://linkedin.com/in/wellington-santiago-dev", color: "hover:text-[#0077b5]" }
           ].map(({ Icon, href, color }, i) => (
             <a key={i} href={href} target="_blank" rel="noopener" className={`w-14 h-14 bg-white border-2 border-[#e5e5e5] border-b-4 rounded-2xl flex items-center justify-center text-slate-300 ${color} transition-all hover:-translate-y-1 hover:border-[#1cb0f6] group shadow-sm`}>
               <Icon size={28} className="group-hover:scale-110 transition-transform" />
             </a>
           ))}
        </div>
      </div>
    </aside>
  );
};

export default StatsSidebar;
