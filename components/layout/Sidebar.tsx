
import React from 'react';
import { Home, BookOpen, Trophy, Zap, Layout } from 'lucide-react';

interface SidebarItemProps {
  icon: any;
  label: string;
  id: string;
  active?: boolean;
  onClick: (id: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, id, active, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all border-2 mb-2 group active:translate-y-1 active:border-b-2 ${
      active 
        ? 'bg-[#ddf4ff] border-[#84d8ff] border-b-4 text-[#1cb0f6]' 
        : 'border-transparent hover:bg-[#f7f7f7] text-[#afafaf] hover:border-[#e5e5e5] hover:border-b-4'
    }`}
  >
    <div className={`transition-transform group-hover:scale-110 ${active ? 'animate-bounce' : ''}`} style={{ animationDuration: '3s' }}>
      <Icon size={32} strokeWidth={active ? 3 : 2} />
    </div>
    <span className={`text-sm font-black uppercase tracking-[0.15em] hidden lg:block text-left transition-colors ${active ? 'text-[#1cb0f6]' : 'group-hover:text-slate-600'}`}>
      {label}
    </span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  onNavClick: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onNavClick }) => {
  const menuItems = [
    { icon: Home, label: "Caminho", id: "home" },
    { icon: Trophy, label: "Missões", id: "experience" },
    { icon: Zap, label: "Inventário", id: "skills" },
    { icon: Layout, label: "Arena", id: "projects" },
    { icon: BookOpen, label: "Academia", id: "profile" },
  ];

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-24 lg:w-72 border-r-2 border-[#e5e5e5] bg-white z-40 px-6 py-10">
      <div className="px-2 mb-12">
        <button 
          onClick={() => onNavClick('home')} 
          className="text-2xl lg:text-3xl font-black text-[#58cc02] tracking-tighter hover:opacity-80 transition-opacity flex flex-col items-start leading-none group"
        >
          <span className="group-hover:scale-105 transition-transform uppercase font-outfit">SANTIAGO</span>
          <span className="text-[#1cb0f6] text-xs tracking-[0.4em] mt-1 font-black">PORTFOLIO</span>
        </button>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.id}
            icon={item.icon} 
            label={item.label} 
            id={item.id} 
            active={activeTab === item.id} 
            onClick={onNavClick} 
          />
        ))}
      </nav>

      <div className="pt-8 mt-auto">
         <div className="bg-[#f7f7f7] border-2 border-[#e5e5e5] border-b-4 rounded-[1.5rem] p-4 text-center">
            <div className="text-[10px] font-black uppercase text-[#afafaf] tracking-widest mb-1">Status</div>
            <div className="text-xs font-black text-[#58cc02] uppercase tracking-tighter">Ready for Co-op</div>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;
