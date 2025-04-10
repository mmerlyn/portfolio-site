/**
 * Smoothly scrolls to a section with proper offset for fixed header
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add offset to account for fixed header height
      const headerHeight = 80; // Adjust based on your header height
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth"
      });
    }
  };
  
  /**
   * Helper function for creating style objects with theme colors
   * @param {Object} theme - The current theme object
   * @param {boolean} isDarkMode - Whether dark mode is active
   * @param {Object} styles - Additional styles to merge
   * @returns {Object} Combined style object
   */
  export const createThemedStyles = (theme, isDarkMode, styles = {}) => {
    return {
      ...styles,
      transition: "background-color 0.3s ease, color 0.3s ease"
    };
  };