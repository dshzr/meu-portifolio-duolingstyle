
import React from 'react';
import { BookOpen, GraduationCap, School, Award } from 'lucide-react';
import { EDUCATION } from '../../constants';
import UnitHeader from '../ui/UnitHeader';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="w-full pt-4 scroll-mt-24 mb-32">
      <UnitHeader 
        title="Unidade 4: Academia de Conhecimento" 
        subtitle="A base teórica de um desenvolvedor moderno" 
        colorClass="bg-[#ff4b4b]"
      />
      
      <div className="space-y-6 relative">
        {/* Abstract Background Element */}
        <div className="absolute -left-20 top-0 opacity-5 pointer-events-none">
           <School size={300} />
        </div>

        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="group relative">
            <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] p-8 rounded-[2.5rem] hover:bg-slate-50 transition-all flex flex-col md:flex-row gap-6 relative active:translate-y-1 active:border-b-2">
              
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ff4b4b] to-[#ff6666] rounded-3xl flex items-center justify-center text-white shadow-lg shrink-0 -rotate-3 group-hover:rotate-3 transition-transform">
                <GraduationCap size={40} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                   <h4 className="text-xl font-black text-slate-800 leading-tight">
                    {edu.degree}
                  </h4>
                  <span className="inline-flex px-3 py-1 bg-[#ff4b4b]/10 text-[#ff4b4b] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#ff4b4b]/20 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 font-bold mb-4">
                  <Award size={16} className="text-[#ffc800]" />
                  {edu.institution}
                </div>
                
                <p className="text-xs text-slate-400 font-bold leading-relaxed">
                  Foco em fundamentos sólidos necessários para a escalabilidade de sistemas críticos e inovação tecnológica.
                </p>
              </div>

              {/* Decorative sparkle */}
              <div className="absolute top-4 right-6 text-[#ffc800] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">
              
              </div>
            </div>
          </div>
        ))}

        {/* Motivation Card */}
        <div className="bg-[#f7f7f7] border-2 border-dashed border-[#e5e5e5] p-10 rounded-[3rem] text-center mt-12 group hover:border-[#ff4b4b] transition-colors">
           <div className="inline-flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <BookOpen size={24} className="text-[#ff4b4b]" />
           </div>
           <p className="text-slate-500 font-bold italic">
             "A educação é o combustível para a evolução de qualquer sistema."
           </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
