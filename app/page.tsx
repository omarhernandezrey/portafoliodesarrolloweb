
import React from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
