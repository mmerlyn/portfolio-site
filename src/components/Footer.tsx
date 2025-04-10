import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as fabGithub,
  faLinkedinIn as fabLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface Theme {
  primary: string;
  secondary: string; 
  text: {
    primary: string;
    secondary: string;
  };
}

interface FooterProps {
  isDarkMode: boolean;
  theme: Theme;
  scrollToSection: (sectionId: string) => void; 
}

const Footer: React.FC<FooterProps> = ({
  isDarkMode,
  theme,
  scrollToSection,
}) => {
  const QuickLink = ({
    section,
    label,
  }: {
    section: string;
    label: string;
  }) => (
    <li>
      <a
        href={`#${section}`}
        className="text-sm sm:text-base transition-colors hover:text-opacity-80" // Added subtle hover effect
        style={{ color: theme.text.secondary }}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          // Typed event
          e.preventDefault();
          scrollToSection(section);
        }}
      >
        {label}
      </a>
    </li>
  );

  return (
    <footer
      className="py-6 relative mt-16"
      style={{
        backgroundColor: isDarkMode ? "#1a1a1a" : "#f0f0f0", // Keeping specific colors for footer
        borderTop: `1px solid ${
          isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
        }`,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Logo/Description */}
          <div className="space-y-4">
            <a
              href="#about" // Link to about section for consistency
              aria-label="Go to about section"
              className="flex items-center space-x-2 cursor-pointer" // Added cursor-pointer
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // Typed event
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: theme.text.primary }}
              >
                Merlyn
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.primary }} // Uses theme.primary
              ></span>
            </a>
            <p
              className="text-sm sm:text-base max-w-xs"
              style={{ color: theme.text.secondary }}
            >
              CS Grad Student and Software Development Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: theme.text.primary }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {/* Using the helper component */}
              <QuickLink section="about" label="About" />
              <QuickLink section="skills" label="Skills" />
              <QuickLink section="projects" label="Projects" />
              <QuickLink section="achievements" label="Achievements" />
              <QuickLink section="certifications" label="Certifications" />
              <QuickLink section="contact" label="Contact" />
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: theme.text.primary }}
            >
              Let's Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/merlynmercylona"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="transition-colors text-lg hover:text-opacity-80" // Added subtle hover effect
                style={{ color: theme.text.secondary }}
              >
                <FontAwesomeIcon icon={fabLinkedinIn} size="lg" />{" "}
                {/* Added size */}
              </a>
              <a
                href="https://github.com/mmerlyn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="transition-colors text-lg hover:text-opacity-80" // Added subtle hover effect
                style={{ color: theme.text.secondary }}
              >
                <FontAwesomeIcon icon={fabGithub} size="lg" />{" "}
                {/* Added size */}
              </a>
              <a
                href="mailto:merlyn@example.com" // Replace with actual email
                aria-label="Email Me"
                className="transition-colors text-lg hover:text-opacity-80" // Added subtle hover effect
                style={{ color: theme.text.secondary }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                {/* Added size */}
              </a>
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-6 text-center"
          style={{
            borderTop: `1px solid ${
              isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`,
            transition: "border-color 0.3s ease",
          }}
        >
          <p
            className="text-sm sm:text-base"
            style={{ color: theme.text.secondary }}
          >
            © {new Date().getFullYear()} Merlyn Mercylona. All Rights Reserved.
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(to right, ${theme.primary}33, ${theme.secondary}33)`,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
