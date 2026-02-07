
import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TECH_MAP: Record<string, string> = {
  'Bubble.io': 'https://imgs.search.brave.com/vYWMj-NWWH0P7viayHJfDtgFzg01g1DK8ZAvF7HiNsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL3Rf/Z2lnX2NhcmRzX3dl/YixxX2F1dG8sZl9h/dXRvL2dpZ3MvMzU4/Mjk4MDI2L29yaWdp/bmFsL2NiODYzYzdi/YzQ4ODAxN2IxMDJm/MzBkMmJmZTg0NmQ1/YTkwODQwMzguanBn',
  'bubble.io': 'https://imgs.search.brave.com/vYWMj-NWWH0P7viayHJfDtgFzg01g1DK8ZAvF7HiNsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL3Rf/Z2lnX2NhcmRzX3dl/YixxX2F1dG8sZl9h/dXRvL2dpZ3MvMzU4/Mjk4MDI2L29yaWdp/bmFsL2NiODYzYzdi/YzQ4ODAxN2IxMDJm/MzBkMmJmZTg0NmQ1/YTkwODQwMzguanBn',
  'n8n': 'https://imgs.search.brave.com/3op0ljzuLlobPkLuIK5qVXcw28YTn9_7jEoTn-hnaaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uOG4u/aW8vYnJhbmRndWlk/ZWxpbmVzL2RvbnQv/c2hhZG93LnBuZw',
  'N8N': 'https://imgs.search.brave.com/3op0ljzuLlobPkLuIK5qVXcw28YTn9_7jEoTn-hnaaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uOG4u/aW8vYnJhbmRndWlk/ZWxpbmVzL2RvbnQv/c2hhZG93LnBuZw',
  'OpenAI': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_logo_2025.svg',
  'openai': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_logo_2025.svg',
  'Node.js': 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  'node.js': 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  'React': 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  'react': 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  'JavaScript': 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  'javascript': 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  'MySQL': 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
  'mysql': 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
  'Firebase': 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  'firebase': 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  'Supabase': 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
  'supabase': 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
  'FlutterFlow': 'https://imgs.search.brave.com/WAIoSeEZpeygkZ2x86JgeYp7LKwlGzfJ29ja5kEVs50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odWIu/YXNpbW92LmFjYWRl/bXkvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMTAvNjViYTc0/OTFlNDBmZWRmYjk5/YmNjNjM3XzY0MDBh/NDJjMWQwZTRhMDI4/MDc4NDQyNl9mbHV0/dGVyZmxvdy53ZWJw',
  'flutterflow': 'https://imgs.search.brave.com/WAIoSeEZpeygkZ2x86JgeYp7LKwlGzfJ29ja5kEVs50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odWIu/YXNpbW92LmFjYWRl/bXkvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMTAvNjViYTc0/OTFlNDBmZWRmYjk5/YmNjNjM3XzY0MDBh/NDJjMWQwZTRhMDI4/MDc4NDQyNl9mbHV0/dGVyZmxvdy53ZWJw',
  'WeWeb': 'https://imgs.search.brave.com/h-vXbgS7CelnYl6tkTIe9I76Hc2NrgFwVjDuopuSOhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MzQwNWFlZDBlZWY4/NzhhZTk3ODE5Yzgv/NjhjYzIwOGYwZDFi/ZTUyYjc3NTg3ZTJk/X3dld2ViJTIwKDEp/LndlYnA',
  'weweb': 'https://imgs.search.brave.com/h-vXbgS7CelnYl6tkTIe9I76Hc2NrgFwVjDuopuSOhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MzQwNWFlZDBlZWY4/NzhhZTk3ODE5Yzgv/NjhjYzIwOGYwZDFi/ZTUyYjc3NTg3ZTJk/X3dld2ViJTIwKDEp/LndlYnA',
  'Tailwind': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  'tailwind': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
};

const TechIcon: React.FC<TechIconProps> = ({ name, size = 20, className = '' }) => {
  const iconUrl = TECH_MAP[name];

  if (!iconUrl) return null;

  return (
    <img 
      src={iconUrl} 
      alt={name} 
      style={{ width: size, height: size }} 
      className={`object-contain ${className}`}
      onError={(e) => {
        // Fallback p/ o ícone oficial do WeWeb se o CDN falhar
        if (name === 'WeWeb') {
          (e.target as HTMLImageElement).src = 'https://www.weweb.io/favicon.ico';
        } else {
          (e.target as HTMLImageElement).style.display = 'none';
        }
      }}
    />
  );
};

export default TechIcon;
