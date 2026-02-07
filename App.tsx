
import React from 'react';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import StatsSidebar from './components/layout/StatsSidebar';
import MobileHeader from './components/layout/MobileHeader';
import MobileFooter from './components/layout/MobileFooter';

// Sections
import HomeSection from './components/sections/HomeSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProfileSection from './components/sections/ProfileSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';

// Hooks
import { useNavigationObserver } from './hooks/useNavigationObserver';

const App: React.FC = () => {
  // Ordem lógica e criativa das seções
  const sectionIds = ['home', 'experience', 'skills', 'projects', 'profile'];
  const { activeTab, handleNavClick } = useNavigationObserver(sectionIds);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col font-outfit">
      
      {/* Sidebar - FIXED Desktop */}
      <Sidebar activeTab={activeTab} onNavClick={handleNavClick} />

      {/* Main Content - Adjusting margin for fixed sidebar */}
      <main className="flex-1 md:ml-24 lg:ml-72 flex flex-col lg:flex-row">
        
        {/* Central Feed - Learning Path */}
        <div className="flex-1 px-4 py-12 md:px-16 pb-32 md:pb-16 max-w-5xl">
          
          {/* Mobile Header Stats (Sticky) */}
          <MobileHeader />

          {/* SECTIONS WRAPPER WITH FADE-IN */}
          <div className="space-y-4">
            <HomeSection onStartJourney={() => handleNavClick('experience')} />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ProfileSection />
          </div>
        </div>

        {/* Right Sidebar (Desktop only) - Stats */}
        <StatsSidebar onContactClick={() => {
          window.open('https://linkedin.com/in/wellington-santiago-dev', '_blank');
        }} />

      </main>

      {/* Mobile Nav - FIXED Bottom Bar */}
      <MobileFooter activeTab={activeTab} onNavClick={handleNavClick} />
    </div>
  );
};

export default App;
