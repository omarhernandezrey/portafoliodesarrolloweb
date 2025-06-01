import React, { lazy } from "react";
import "../styles/globals.css";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import LazySection from "../components/shared/LazySection";

// Lazy loading de componentes pesados (no críticos para el primer render)
const EducationSection = lazy(() => import("../components/sections/EducationSection"));
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const SkillSection = lazy(() => import("../components/sections/SkillSection"));
const ProjectsSection = lazy(() => import("../components/sections/ProjectsSection"));
const ContactForm = lazy(() => import("../components/sections/ContactForm"));
const Footer = lazy(() => import("../components/shared/Footer"));

export default function Home() {
  return (
    <>
      {/* Componentes críticos - cargan inmediatamente */}
      <HeroSection />
      <AboutSection />
      
      {/* Componentes pesados - lazy loading con intersection observer */}
      <LazySection minHeight="60vh" rootMargin="150px">
        <EducationSection />
      </LazySection>
      
      <LazySection minHeight="50vh" rootMargin="150px">
        <SkillSection />
      </LazySection>
      
      <LazySection minHeight="50vh" rootMargin="150px">
        <ServicesSection />
      </LazySection>
      
      <LazySection minHeight="70vh" rootMargin="150px">
        <ProjectsSection />
      </LazySection>
      
      <LazySection minHeight="60vh" rootMargin="150px">
        <ContactForm />
      </LazySection>
      
      <LazySection minHeight="30vh" rootMargin="100px">
        <Footer />
      </LazySection>
    </>
  );
}