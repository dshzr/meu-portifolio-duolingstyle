
import React from 'react';
import { User, Zap, Flame, Target } from 'lucide-react';
import UnitHeader from '../ui/UnitHeader';
import DuoButton from '../ui/DuoButton';
import RewardCard from '../ui/RewardCard';

interface HomeSectionProps {
  onStartJourney: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onStartJourney }) => {
  return (
    <section id="home" className="w-full pt-4 scroll-mt-24">
      <UnitHeader 
        title="Unidade 1: O Início" 
        subtitle="Wellington Santiago - Analista & Mentor" 
        colorClass="bg-[#58cc02]"
      />
      
      <div className="flex flex-col items-center relative mb-24">
        {/* Decorative Path Line with more style */}
        <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[#e5e5e5] -translate-x-1/2 -z-10 rounded-full overflow-hidden">
           <div className="w-full h-1/2 bg-gradient-to-b from-[#58cc02] to-[#e5e5e5]"></div>
        </div>
        
        {/* Premium Hero Card */}
        <div className="bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2rem] p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-8 w-full group relative overflow-hidden active:translate-y-1 active:border-b-2 transition-all">
          
          {/* Animated Background Decoration */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#58cc02]/5 rounded-full blur-3xl group-hover:bg-[#58cc02]/10 transition-colors"></div>
          
          {/* Action Icons Floating */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-[#ff9600]/10 p-2 rounded-xl text-[#ff9600] animate-bounce" style={{ animationDuration: '3s' }}>
              <Flame size={20} fill="currentColor" />
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#1cb0f6] rounded-[2.5rem] flex items-center justify-center group-hover:scale-105 group-hover:rotate-2 transition-transform overflow-hidden border-4 border-[#1cb0f6] shadow-xl relative z-10">
                <img 
                  src="/assets/wellington.jpg"
                  alt="Wellington Santiago - Analista Bubble, FlutterFlow e Mentor de Desenvolvimento No-code"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-[#1cb0f6] text-white"><User size={64} /></div>';
                  }}
                />
             </div>
           
           </div>
           
           <div className="z-10 text-center md:text-left flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1cb0f6]/10 text-[#1cb0f6] rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
               <Zap size={12} fill="currentColor" /> Level 99 Developer
             </div>
             <h1 className="text-3xl font-black mb-2 text-slate-800 tracking-tight">Wellington Santiago</h1>
            <p className="text-slate-500 font-bold leading-relaxed mb-6 text-sm md:text-base">
              Transformo ideias em <span className="text-[#58cc02] font-black">soluções reais</span> usando o poder do Low-code e No-code. 
              Especialista em construir o futuro, um clique por vez.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <DuoButton color="blue" className="text-xs px-10 py-4 shadow-lg" onClick={onStartJourney}>
                Explorar Jornada
              </DuoButton>
            </div>
          </div>
        </div>

        {/* Standardized Reward Card */}
        <RewardCard 
          title="Mentor de Conhecimento"
          description="Ensinar é a melhor forma de aprender. Simplificando a tecnologia para que qualquer pessoa possa construir o extraordinário."
          icon={Target}
          bgColor="bg-gradient-to-r from-[#58cc02] to-[#46a302]"
          borderColor="border-[#3a8602]"
        />
      </div>
    </section>
  );
};

export default HomeSection;
