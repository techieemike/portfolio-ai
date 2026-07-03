// Import the navigation bar component
import Navbar from "@/components/Navbar";

// Import the hero/landing section component
import HeroSection from "@/components/HeroSection";

// Import the about section component
import AboutSection from "@/components/AboutSection";

// Import the projects showcase section component
import ProjectsSection from "@/components/ProjectsSection";

// Import the skills section component
import SkillsSection from "@/components/SkillsSection";

// Import the experience/work history section component
import ExperienceSection from "@/components/ExperienceSection";

// Import the blog/articles section component
import BlogSection from "@/components/BlogSection";

// Import the contact section component
import ContactSection from "@/components/ContactSection";

// Import the AI chatbot component
import Chatbot from "@/components/Chatbot";

// Import the footer component
import Footer from "@/components/Footer";

// Create and export the Home page component
export default function Home() {

  // JSX returned by the Home page
  return (

    // Main wrapper container for the entire page
    <div className="relative">

      {/* Top navigation bar */}
      <Navbar />

      {/* Main page content */}
      <main>

        {/* Hero / introduction section */}
        <HeroSection />

        {/* About me section */}
        <AboutSection />

        {/* Portfolio projects section */}
        <ProjectsSection />

        {/* Skills and technologies section */}
        <SkillsSection />

        {/* Work experience section */}
        <ExperienceSection />

        {/* Blog/articles section */}
        <BlogSection />

        {/* Contact form or contact info section */}
        <ContactSection />
      </main>

      {/* Floating AI chatbot */}
      <Chatbot />

      {/* Bottom footer */}
      <Footer />
    </div>
  );
}