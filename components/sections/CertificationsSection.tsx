
import React from 'react';
import { Award, ExternalLink, ShieldCheck, Medal } from 'lucide-react';
import { CERTIFICATIONS } from '../../constants';
import UnitHeader from '../ui/UnitHeader';
import RewardCard from '../ui/RewardCard';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="max-w-2xl mx-auto pt-4 scroll-mt-24 mb-32 w-full">
      <UnitHeader 
        title="Unidade 6: Mural de Conquistas" 
        subtitle="Certificações e selos de autoridade técnica" 
        colorClass="bg-[#ff9600]"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="bg-white border-2 border-[#e5e5e5] border-b-[6px] p-6 rounded-[2.5rem] flex flex-col gap-4 group hover:border-[#ff9600] transition-all hover:-translate-y-1 active:translate-y-0 active:border-b-2">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 bg-[#ff9600]/10 rounded-2xl flex items-center justify-center text-[#ff9600] group-hover:scale-110 transition-transform">
                {cert.organization === 'Origamid' ? <ShieldCheck size={32} /> : cert.organization === 'Udemy' ? <Award size={32} /> : <Medal size={32} />}
              </div>
              <div className="text-[10px] font-black text-[#afafaf] uppercase tracking-widest mt-1">
                {cert.issueDate.split(' de ')[1] || cert.issueDate}
              </div>
            </div>

            <div>
              <h4 className="font-black text-slate-800 text-sm leading-tight uppercase mb-1 group-hover:text-[#ff9600] transition-colors">{cert.name}</h4>
              <p className="text-xs text-slate-400 font-bold mb-3">{cert.organization}</p>
            </div>

            <div className="mt-auto flex items-center justify-between">
              {cert.credentialId && (
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">
                  ID: {cert.credentialId.substring(0, 10)}...
                </div>
              )}
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-[10px] font-black text-[#ff9600] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                >
                  Ver Credencial <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Standardized Reward Card */}
      <RewardCard 
        title="Colecionador de Elite"
        description="Mais de 7 certificações técnicas de alto nível desbloqueadas em instituições renomadas como Origamid, Udemy e DevMedia."
        icon={ShieldCheck}
        bgColor="bg-[#58cc02]"
        borderColor="border-[#46a302]"
      />
    </section>
  );
};

export default CertificationsSection;
