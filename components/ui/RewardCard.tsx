
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RewardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  borderColor: string;
  iconBgColor?: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  bgColor, 
  borderColor,
  iconBgColor = "bg-white/20"
}) => {
  return (
    <div className={`mt-16 ${bgColor} border-b-8 ${borderColor} p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between text-white group overflow-hidden relative text-center md:text-left min-h-[160px]`}>
       {/* Background Decoration */}
       <div className="absolute right-0 top-0 opacity-10 -rotate-12 translate-x-4">
          <Icon size={160} />
       </div>
       
       <div className="relative z-10 mb-6 md:mb-0 md:pr-8">
          <h4 className="font-black text-xl md:text-2xl mb-1 uppercase tracking-tighter leading-tight">{title}</h4>
          <p className="font-bold text-white/80 text-sm md:text-base max-w-xl">{description}</p>
       </div>
       
       <div className={`${iconBgColor} p-5 rounded-[2rem] backdrop-blur-sm relative z-10 shrink-0 transform group-hover:scale-110 transition-transform shadow-inner`}>
          <Icon size={48} fill="white" className="text-white" />
       </div>
    </div>
  );
};

export default RewardCard;
