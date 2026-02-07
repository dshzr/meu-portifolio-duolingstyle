
import React from 'react';
import UnitHeader from '../ui/UnitHeader';
import DuoButton from '../ui/DuoButton';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="max-w-2xl mx-auto pt-4 scroll-mt-24 mb-24">
       <UnitHeader 
        title="Unidade 5: Multijogador" 
        subtitle="Vamos conversar e construir algo juntos!" 
        colorClass="bg-[#ff4b4b]"
      />
      <div className="bg-white border-2 border-[#e5e5e5] border-b-4 rounded-3xl p-6 md:p-8 shadow-sm">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="SEU NOME" 
                className="w-full p-4 border-2 border-[#e5e5e5] rounded-2xl font-black uppercase text-xs focus:border-[#1cb0f6] outline-none bg-[#f7f7f7]" 
              />
              <input 
                type="email" 
                placeholder="SEU E-MAIL" 
                className="w-full p-4 border-2 border-[#e5e5e5] rounded-2xl font-black uppercase text-xs focus:border-[#1cb0f6] outline-none bg-[#f7f7f7]" 
              />
            </div>
            <textarea 
              placeholder="SUA MENSAGEM" 
              className="w-full p-4 border-2 border-[#e5e5e5] rounded-2xl font-black uppercase text-xs focus:border-[#1cb0f6] outline-none bg-[#f7f7f7] h-32"
            ></textarea>
            <DuoButton type="submit" color="green" className="w-full">
              Enviar Convite
            </DuoButton>
          </form>
      </div>
    </section>
  );
};

export default ContactSection;
