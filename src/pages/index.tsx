import React from "react";

// Importación de organismos (componentes grandes y reutilizables que componen la UI principal)
import Sidebar from "@/components/organisms/Sidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";
import SocialSidebar from "@/components/organisms/SocialSidebar";

/**
 * Componente principal de la página Home (index)
 * 
 * - Única página del proyecto que organiza y renderiza toda la interfaz en un solo lugar.
 * - Usa diseño con 3 columnas principales:
 *    - Sidebar izquierdo (menú y perfil resumido)
 *    - Contenido principal con secciones (perfil, conocimiento, educación, portafolio, footer)
 *    - Sidebar derecho con links sociales (redes sociales)
 * 
 * - Usa flexbox para distribuir las columnas horizontalmente.
 * - Aplica colores y padding para separación visual y responsividad.
 * - Los anchos de cada columna varían según tamaño de pantalla para adaptarse a dispositivos.
 * 
 * Estructura y orden:
 *  1. Sidebar: navegación y datos usuario
 *  2. Main: contenido central con las distintas secciones del portafolio
 *  3. Aside: barra lateral social con enlaces externos
 * 
 * Esta arquitectura permite escalabilidad y mantenimiento al separar el UI en organismos reutilizables,
 * manteniendo la lógica sencilla y clara en esta página raíz.
 */
const HomePage = () => {
  return (
    <div className="flex bg-[#F4F4F4] min-h-screen">
      {/* Sidebar izquierdo: menú y perfil */}
      <Sidebar />

      {/* Contenido principal: secciones principales del portafolio */}
      <main
        className="
          px-2 sm:px-4 md:px-6 lg:px-8
          space-y-10
          w-[92%] sm:w-[91%] md:w-[91%]
          lg:w-[71%] lg:ml-[23%]
          xl:w-full xl:ml-[20%]
          2xl:ml-[15%]"
      >
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Sidebar derecho: links sociales */}
      <aside className="w-[14%] sm:w-[13%] md:w-[9%] lg:w-[6%] xl:w-[7%]">
        <SocialSidebar />
      </aside>
    </div>
  );
};

export default HomePage;
