import React from "react";

// Importación de los organismos
import Sidebar from "@/components/organisms/Sidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";
import SocialSidebar from "@/components/organisms/SocialSidebar";

const HomePage = () => {
  return (
    <div className="flex bg-[#F4F4F4] min-h-screen">
      {/* Sidebar izquierdo */}
        <Sidebar />

      {/* Contenido principal */}
      <main className="px-2 sm:px-4 md:px-6 lg:px-8 space-y-10 w-[92%] sm:w-[91%] md:w-[91%] lg:w-[71%] lg:ml-[23%] xl:w-full xl:ml-[20%] 2xl:ml-[15%]">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Sidebar derecho para redes sociales */}
      <aside className="w-[14%] sm:w-[13%] md:w-[9%] lg:w-[6%] xl:w-[7%]">
        <SocialSidebar />
      </aside>
    </div>
  );
};


export default HomePage;
