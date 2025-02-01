/** @type {import('tailwindcss').Config} */

// ! IMPLEMENT DARK MODE FOR APP IF THERE'S TIME
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
          hover: "#f43f5e", // rose-500
        },
        accent: {
          DEFAULT: "#fcd34d", // yellow-300
          hover: "#fbbf24", // yellow-400
        },
        background: {
          DEFAULT: "#fff1f2", // rose-50
        },
        textColor: {
          DEFAULT: "#1f2937", // gray-800
        },
        error: {
          DEFAULT: "#f87171", // red-400
          hover: "#ef4444", // red-500
        },
      },
    },
  },
};
