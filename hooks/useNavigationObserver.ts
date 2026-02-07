
import { useState, useEffect, useRef } from 'react';

export const useNavigationObserver = (sectionIds: string[]) => {
  const [activeTab, setActiveTab] = useState(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '-20% 0px -20% 0px' 
    });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sectionIds]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return { activeTab, setActiveTab, handleNavClick };
};
