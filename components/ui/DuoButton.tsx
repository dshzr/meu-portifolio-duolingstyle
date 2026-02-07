
import React from 'react';

interface DuoButtonProps {
  children: React.ReactNode;
  color?: 'green' | 'blue' | 'gray' | 'white' | 'red';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const DuoButton: React.FC<DuoButtonProps> = ({ 
  children, 
  color = 'green', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const themes = {
    green: 'bg-[#58cc02] border-[#46a302] text-white hover:bg-[#61e002]',
    blue: 'bg-[#1cb0f6] border-[#1899d6] text-white hover:bg-[#20c4ff]',
    gray: 'bg-[#afafaf] border-[#8a8a8a] text-white hover:bg-[#bfbfbf]',
    white: 'bg-white border-[#e5e5e5] text-[#afafaf] hover:bg-[#f7f7f7]',
    red: 'bg-[#ff4b4b] border-[#d33131] text-white hover:bg-[#ff5e5e]'
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl border-b-4 font-black uppercase tracking-wider transition-all active:translate-y-1 active:border-b-0 ${themes[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default DuoButton;
