// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Add this if using Next.js App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // Covers everything in src
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#072F40',
          text: '#353F50'
        },
        // Add other colors here as needed
      },
      fontFamily: {
        averta: ["var(--font-averta)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};