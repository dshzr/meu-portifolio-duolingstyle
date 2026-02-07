
import React, { useState } from 'react';
import { Rocket, ExternalLink, Github, Layout, Monitor, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../../constants';
import UnitHeader from '../ui/UnitHeader';
import ImageModal from '../ui/ImageModal';

const ProjectsSection: React.FC = () => {
  const hasProjects = PROJECTS.length > 0;
  const [modalData, setModalData] = useState<{ images: string[], index: number, isOpen: boolean }>({
    images: [],
    index: 0,
    isOpen: false
  });

  const openLightbox = (images: string[], index: number) => {
    setModalData({ images, index, isOpen: true });
  };

  const closeLightbox = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = () => {
    setModalData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setModalData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <section id="projects" className="w-full pt-4 scroll-mt-24 mb-32">
      <UnitHeader 
        title="Unidade 5: Arena de Projetos" 
        subtitle="Onde as ideias ganham vida através do código" 
        colorClass="bg-[#ce82ff]"
      />
      
      {!hasProjects ? (
        <div className="bg-[#f7f7f7] border-2 border-dashed border-[#e5e5e5] p-12 rounded-[3rem] text-center group">
          <div className="inline-flex w-20 h-20 bg-white rounded-3xl items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all border-2 border-[#e5e5e5]">
            <Rocket size={40} className="text-[#ce82ff]" />
          </div>
          <h4 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-tight">Novos Desafios em Breve</h4>
          <p className="text-slate-500 font-bold max-w-sm mx-auto leading-relaxed">
            Estou preparando uma seleção épica dos meus melhores projetos para mostrar aqui. Prepare-se!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white border-2 border-[#e5e5e5] border-b-[6px] rounded-[2.5rem] overflow-hidden hover:bg-slate-50 transition-all group active:translate-y-1 active:border-b-2">
              {project.images && project.images.length > 0 && (
                <div className={`grid ${project.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} bg-slate-100 border-b-2 border-[#e5e5e5]`}>
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => openLightbox(project.images || [], i)}
                      className={`h-48 md:h-64 overflow-hidden cursor-zoom-in relative group/img ${i > 0 ? 'border-t-2 md:border-t-0 md:border-l-2' : ''} border-[#e5e5e5]`}
                    >
                      <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                        <div className="bg-white/90 p-3 rounded-2xl shadow-lg border-b-4 border-slate-200">
                          <ZoomIn className="text-[#ce82ff]" size={24} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#ce82ff]/10 text-[#ce82ff] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#ce82ff]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black text-slate-800 mb-3 uppercase tracking-tighter">{project.title}</h4>
                <p className="text-slate-500 font-bold mb-6 leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#ce82ff] text-white rounded-2xl font-black text-xs uppercase tracking-widest border-b-4 border-[#a331d3] hover:opacity-90 active:translate-y-1 active:border-b-0 transition-all">
                      <Monitor size={16} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest border-2 border-[#e5e5e5] border-b-4 hover:bg-white active:translate-y-1 active:border-b-2 transition-all">
                      <Github size={16} /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ImageModal 
        images={modalData.images}
        currentIndex={modalData.index}
        isOpen={modalData.isOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
};

export default ProjectsSection;
