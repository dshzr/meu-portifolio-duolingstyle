
import React from 'react';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import MobileHeader from './components/layout/MobileHeader';
import MobileFooter from './components/layout/MobileFooter';

// Sections
import HomeSection from './components/sections/HomeSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProfileSection from './components/sections/ProfileSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';

// Hooks
import { useNavigationObserver } from './hooks/useNavigationObserver';

const App: React.FC = () => {
  // Ordem lógica e criativa das seções
  const sectionIds = ['home', 'experience', 'skills', 'projects', 'certifications', 'profile', 'contact'];
  const { activeTab, handleNavClick } = useNavigationObserver(sectionIds);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col font-outfit">
      
      {/* Sidebar - FIXED Desktop */}
      <Sidebar activeTab={activeTab} onNavClick={handleNavClick} />

      {/* Main Content - Adjusting margin for fixed sidebar */}
      <main className="flex-1 md:ml-24 lg:ml-72">
        
        {/* Central Feed - Learning Path */}
        <div className="px-4 py-12 md:px-16 pb-32 md:pb-16 w-full max-w-5xl mx-auto">
          
          {/* Mobile Header Stats (Sticky) */}
          <MobileHeader />

          {/* SECTIONS WRAPPER WITH FADE-IN */}
          <div className="space-y-4">
            <HomeSection onStartJourney={() => handleNavClick('experience')} />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <ProfileSection />
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Mobile Nav - FIXED Bottom Bar */}
      <MobileFooter activeTab={activeTab} onNavClick={handleNavClick} />
    </div>
  );
};

export default App;
