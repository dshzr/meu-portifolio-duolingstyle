
import React from 'react';
import { Zap, Code2, Database, Bot, Layout, Terminal, Trophy } from 'lucide-react';
import { SKILLS } from '../../constants';
import UnitHeader from '../ui/UnitHeader';

const SkillsSection: React.FC = () => {
  // Agrupar habilidades por categoria
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  const getCategoryTheme = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('front') || cat.includes('ui')) return { color: 'text-[#1cb0f6]', bg: 'bg-[#1cb0f6]/10', icon: <Layout size={20} /> };
    if (cat.includes('back') || cat.includes('backend')) return { color: 'text-[#58cc02]', bg: 'bg-[#58cc02]/10', icon: <Terminal size={20} /> };
    if (cat.includes('data') || cat.includes('auth')) return { color: 'text-[#ff4b4b]', bg: 'bg-[#ff4b4b]/10', icon: <Database size={20} /> };
    if (cat.includes('auto') || cat.includes('low')) return { color: 'text-[#ff9600]', bg: 'bg-[#ff9600]/10', icon: <Bot size={20} /> };
    return { color: 'text-[#ce8200]', bg: 'bg-[#ffc800]/10', icon: <Code2 size={20} /> };
  };

  return (
    <section id="skills" className="max-w-2xl mx-auto pt-4 scroll-mt-24 mb-32">
       <UnitHeader 
        title="Unidade 3: Inventário Técnico" 
        subtitle="O arsenal de ferramentas desbloqueadas" 
        colorClass="bg-[#ffc800]"
      />
      
      <div className="space-y-12">
        {Object.entries(groupedSkills).map(([category, skills]) => {
          const theme = getCategoryTheme(category);
          return (
            <div key={category} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${theme.bg} ${theme.color} rounded-2xl shadow-sm rotate-3 group-hover:rotate-0 transition-transform`}>
                  {theme.icon}
                </div>
                <div>
                   <h3 className="text-sm font-black uppercase text-slate-800 tracking-[0.2em]">
                    {category}
                  </h3>
                  <div className="h-1 w-12 bg-[#ffc800] rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bg-white border-2 border-[#e5e5e5] border-b-[6px] p-5 rounded-3xl flex flex-col gap-4 hover:border-[#ffc800] hover:bg-slate-50/50 transition-all hover:-translate-y-1 active:translate-y-0 active:border-b-2 group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#ffc800]/20 group-hover:text-[#ffc800] transition-colors">
                          <Zap size={20} fill={idx % 2 === 0 ? "currentColor" : "none"} />
                        </div>
                        <span className="font-black text-slate-700 uppercase text-sm tracking-tight">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                       
                        <span className="text-[10px] font-black text-[#afafaf]">NÍVEL 5</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar / Mastery Bar */}
                    <div className="space-y-2">
                       <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                         <span>Mastery</span>
                         <span className="text-[#58cc02]">100%</span>
                       </div>
                       <div className="h-3 w-full bg-[#f0f0f0] rounded-full border border-[#e5e5e5] overflow-hidden p-[2px]">
                          <div 
                            className="h-full bg-gradient-to-r from-[#58cc02] to-[#61e002] rounded-full relative"
                            style={{ width: `${100 - (idx * 3)}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Specialty Badge */}
      <div className="mt-16 bg-[#1cb0f6] border-b-8 border-[#1899d6] p-8 rounded-[2.5rem] flex items-center justify-between text-white group overflow-hidden relative">
         <div className="absolute right-0 top-0 opacity-10 -rotate-12 translate-x-4">

         </div>
         <div className="relative z-10">
            <h4 className="font-black text-xl mb-1 uppercase tracking-tighter">Especialista Low-code</h4>
            <p className="font-bold text-white/80 text-sm">Pronto para criar ferramentas complexas e integradas.</p>
         </div>
         <div className="bg-white/20 p-4 rounded-3xl backdrop-blur-sm relative z-10 shrink-0">
            <Trophy size={40} fill="white" />
         </div>
      </div>
    </section>
  );
};

export default SkillsSection;
