/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: "url('/leone.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: "#fb7185", // rose-400
        },
        accent: {
          DEFAULT: "#fcd34d", // yellow-300
        },
        background: {
          DEFAULT: "#fff1f2", // rose-50
        },
        textColor: {
          DEFAULT: "#1f2937", // gray-800
        },
        error: {
          DEFAULT: "#f87171", // red-400
        },
      },
    },
  },
  plugins: [],
};
