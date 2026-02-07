import React from 'react';
import UnitHeader from '../ui/UnitHeader';
import DuoButton from '../ui/DuoButton';
import { Linkedin, Github, MessageCircle, Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    { 
      name: "LinkedIn", 
      desc: "Conexões Profissionais", 
      icon: Linkedin, 
      color: "bg-[#0077b5]", 
      link: "https://linkedin.com/in/wellington-santiago-dev" 
    },
    { 
      name: "GitHub", 
      desc: "Repositórios e Código", 
      icon: Github, 
      color: "bg-slate-800", 
      link: "https://github.com/dshzr" 
    },
    { 
      name: "WhatsApp", 
      desc: "Conversa Imediata", 
      icon: MessageCircle, 
      color: "bg-[#25d366]", 
      link: "https://wa.me/5513996918986" 
    },
    { 
      name: "Email", 
      desc: "Propostas Formais", 
      icon: Mail, 
      color: "bg-[#ff4b4b]", 
      link: "mailto:contato.wellingtonsantos.dev@gmail.com" 
    }
  ];

  return (
    <section id="contact" className="w-full pt-4 scroll-mt-24 mb-32">
       <UnitHeader 
        title="Unidade Final: Modo Multiplayer" 
        subtitle="Vamos construir o próximo nível juntos?" 
        colorClass="bg-[#ff4b4b]"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, i) => (
          <a 
            key={i} 
            href={method.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2rem] p-6 flex flex-col items-center text-center hover:bg-slate-50 transition-all hover:-translate-y-1 active:translate-y-0 active:border-b-2"
          >
            <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
              <method.icon size={30} />
            </div>
            <h4 className="font-black text-slate-800 text-sm uppercase tracking-tight mb-1">{method.name}</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{method.desc}</p>
            
            <div className="mt-6 w-full py-2 bg-[#f7f7f7] rounded-xl text-[10px] font-black uppercase text-slate-400 group-hover:text-[#ff4b4b] group-hover:bg-[#ff4b4b]/10 transition-colors">
              Conectar
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ff4b4b]/5 rounded-full blur-3xl group-hover:bg-[#ff4b4b]/10 transition-colors"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-black text-slate-800 mb-4 uppercase tracking-tight">Pronto para começar?</h3>
          <p className="text-slate-500 font-bold max-w-lg mx-auto mb-8 leading-relaxed">
            Seja para um projeto complexo, uma mentoria ou apenas um café virtual sobre No-code, estou à disposição para ajudar.
          </p>
          <DuoButton 
            color="green" 
            className="px-12 py-4 shadow-xl"
            onClick={() => window.open('https://wa.me/5513996918986', '_blank')}
          >
            <span className="flex items-center gap-2">
              <Send size={18} /> BORA CONVERSAR!
            </span>
          </DuoButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
