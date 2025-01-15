module.exports = {
  darkMode: 'class', // Habilita el modo oscuro basado en una clase
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        palette1: {
          background: '#141414',
          text: '#ffffff',
          primary: '#ffa500',
          secondary: '#333333',
          accent: '#808080',
        },
        palette2: {
          background: '#f5f5f5',
          text: '#141414',
          primary: '#ff5722',
          secondary: '#607d8b',
          accent: '#03a9f4',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
