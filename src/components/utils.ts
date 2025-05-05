/**
 * @param {string} sectionId
 */
export const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      
      const headerHeight = 80; 
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth"
      });
    }
  };
  
  /**
   * @param {Object} theme 
   * @param {boolean} isDarkMode 
   * @param {Object} styles 
   * @returns {Object} 
   */
  export const createThemedStyles = (styles = {}) => {
    return {
      ...styles,
      transition: "background-color 0.3s ease, color 0.3s ease"
    };
  };