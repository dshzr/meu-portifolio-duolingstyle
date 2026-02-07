
import React from 'react';
import { Home, BookOpen, Trophy, Zap, Layout } from 'lucide-react';

interface MobileFooterProps {
  activeTab: string;
  onNavClick: (id: string) => void;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ activeTab, onNavClick }) => {
  const menuItems = [
    { icon: Home, id: 'home' },
    { icon: Trophy, id: 'experience' },
    { icon: Zap, id: 'skills' },
    { icon: Layout, id: 'projects' },
    { icon: BookOpen, id: 'profile' },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#e5e5e5] px-4 py-3 flex justify-around items-center z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
      {menuItems.map(({ icon: Icon, id }) => (
        <button 
          key={id}
          onClick={() => onNavClick(id)} 
          className={`relative p-2 transition-all active:scale-90 ${activeTab === id ? 'text-[#1cb0f6]' : 'text-[#afafaf]'}`}
        >
          <Icon size={30} strokeWidth={activeTab === id ? 3 : 2} />
          {activeTab === id && (
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1cb0f6] rounded-full" />
          )}
        </button>
      ))}
    </footer>
  );
};

export default MobileFooter;
