import React, { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface Theme {
  surface: string;
  primary: string;
  secondary: string;
  onPrimary: string;
  onSecondary: string;
  text: {
    primary: string;
    secondary: string;
  };
}

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleTheme,
  theme,
  scrollToSection,
}) => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle link clicks (scroll and close menu)
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    scrollToSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Optional: Close mobile menu if window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMobileMenuOpen) {
        // 640px is Tailwind's 'sm' breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]); // Re-run effect if isMobileMenuOpen changes

  // Define navigation links data
  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      // Add relative positioning context for the absolute mobile menu
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md p-4"
      style={{
        backgroundColor: `${theme.surface}${isDarkMode ? "E6" : "E6"}`,
        borderBottom: `1px solid ${
          isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
        }`,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Main Header Content */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-12">
      {/* Left side grouped */}
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full"
          style={{
            backgroundColor: isDarkMode
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
            color: theme.text.primary,
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
          <h1
            className="text-xl sm:text-2xl font-bold"
            style={{ color: theme.text.primary }}
            
          >
            Merlyn Mercylona
          </h1>
          <span
            className="text-sm sm:text-base flex items-center gap-1 mt-1 sm:mt-0 sm:ml-4"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon icon={faLocationDot} />
            San Diego, CA
          </span>
        </div>
      </div>

      {/* Right Side: Desktop Navigation (Hidden on Small Screens) */}
      <nav className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm sm:text-base transition-colors hover:text-opacity-80"
              style={{ color: theme.text.primary }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // Desktop doesn't need to close menu
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>  

        {/* Hamburger Menu Button (Visible Only on Small Screens) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" // Added focus styling
            style={{ color: theme.text.primary }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu" 
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faXmark : faBars}
              size="lg"
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden absolute top-full left-0 right-0 shadow-md transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none" 
        }`}
        style={{
          backgroundColor: `${theme.surface}F2`,
          borderBottom: `1px solid ${
            isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          }`,
        }}
      >
        <nav className="px-6 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-opacity-10"
              style={{
                color: theme.text.secondary,
              }}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
