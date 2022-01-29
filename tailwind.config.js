const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors, 
      /* LIGHT THEME */ 
      primary_fg: colors.neutral[900],
      primary_fg_focus: colors.neutral[700],
      primary_bg: colors.neutral[400],
      /* Add more */
      
      /* DARK THEME */
      primary_fg_dark: colors.cyan[500],
      primary_fg_focus_dark: colors.cyan[300],
      primary_bg_dark: colors.neutral[800],
      /* Add more */
    }, 
    extend: {},
  },
  plugins: [],
}
