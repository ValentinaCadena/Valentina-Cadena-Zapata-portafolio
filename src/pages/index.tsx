import React from 'react';

// Importación de los organismos
import Sidebar from '@/components/organisms/Sidebar';
import ProfileSection from '@/components/organisms/ProfileSection';
import KnowledgeSection from '@/components/organisms/KnowledgeSection';
import EducationSection from '@/components/organisms/EducationSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import Footer from '@/components/organisms/Footer';
import SocialSidebar from '@/components/organisms/SocialSidebar';

const HomePage = () => {
  return (
    <div className="flex bg-[#F4F4F4] min-h-screen">
      {/* Sidebar izquierdo */}
        <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 ml-[10px] mr-[110px] px-8 space-y-10">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Sidebar derecho para redes sociales */}
      <aside className="w-24 fixed top-0 right-0 h-full flex flex-col items-center justify-center space-y-6 z-10">
        <SocialSidebar />
      </aside>
    </div>
  );
};

export default HomePage;
