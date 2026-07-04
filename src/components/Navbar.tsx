// Tells Next.js this component should run on the client side/browser, not server side
"use client";

// Import React hooks for state management and side effects
import { useState, useEffect } from "react";

// Import menu and close icons from lucide-react
import { Menu, X } from "lucide-react";

// Import navigation links array from your data file
import { navLinks } from "@/lib/data";

// Create and export the Navbar component
export default function Navbar() {

  // State to control mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // State to track which section is currently active on screen
  const [activeSection, setActiveSection] = useState("");

  // State to know whether the user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Run this effect after component mounts
  useEffect(() => {

    // Function that runs whenever the user scrolls
    const handleScroll = () => {

      // If user scrolls more than 50px, set scrolled to true
      setScrolled(window.scrollY > 50);

      // Get all section IDs from nav links
      // Example: "#about" becomes "about"
      const sections = navLinks.map((link) => link.href.replace("#", ""));

      // Loop through sections in reverse order
      // Reverse helps detect the current visible section correctly
      for (const id of sections.reverse()) {

        // Find the section element in the DOM
        const el = document.getElementById(id);

        // Check if the section exists and is close to top of viewport
        if (el && el.getBoundingClientRect().top <= 150) {

          // Set this section as active
          setActiveSection(id);

          // Stop looping once a section is found
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function removes event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);

  }, []); // Empty dependency array means it runs once on mount

  // JSX returned by the component
  return (

    // Main navbar container
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          // Navbar style when user scrolls
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"

          // Navbar style before scrolling
          : "bg-transparent"
      }`}
    >

      {/* Navbar inner content */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo / Brand name */}
        <a
          href="#"
          className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          @TheBigFish Lab
        </a>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-4">

          {/* Loop through all nav links */}
          {navLinks.map((link) => (

            <a
              key={link.href}
              href={link.href}

              // Dynamic styling for active section
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-emerald-400" // Active link color
                  : "text-zinc-400 hover:text-zinc-100" // Inactive link color
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-zinc-300"

          // Toggle menu open/close when clicked
          onClick={() => setIsOpen(!isOpen)}

          // Accessibility label
          aria-label="Toggle menu"
        >

          {/* Show X icon if menu is open, else show Menu icon */}
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (

        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">

          {/* Mobile links container */}
          <div className="px-6 py-4 flex flex-col gap-4">

            {/* Loop through nav links again for mobile */}
            {navLinks.map((link) => (

              <a
                key={link.href}
                href={link.href}

                // Close mobile menu when link is clicked
                onClick={() => setIsOpen(false)}

                // Dynamic styling for active mobile link
                className={`text-sm font-medium py-2 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}