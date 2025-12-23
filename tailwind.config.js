/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        bb: {
          bg: "#FFFDF6",
          surface: "#FFFFFF",
          surfaceSoft: "#F2F4F7",
          text: "#1A1C1E",
          textSoft: "#667085",
          muted: "#98A2B3",
          border: "#E4E7EC",
          primary: "#FDC836",
          primarySoft: "#60A5FA",
          secondary: "#FFFFFF",
          danger: "#EF4444",
          warning: "#F59E0B",
          info: "#0EA5E9",
        },
      },
      boxShadow: {
        "bb-card": "0 2px 6px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
