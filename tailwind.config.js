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
          DEFAULT: "#c8e6c9", // green-100
          littleDarker: "#ffe4e6", // rose-100
          darker: "#fecdd3", // rose-200
          hover: "#1f2937", // gray-800 (strong contrast for hover)
        },
        textColor: {
          DEFAULT: "#1f2937", // gray-800
          altText: "#111827",
          lightText: "#fff1f2",
          altLightText: "#f3f4f6",
        },
        error: {
          DEFAULT: "#f87171", // red-400
          hover: "#ef4444", // red-500
        },
      },
    },
  },
};

// Best Tailwind Text Colors for High Contrast
// For light backgrounds (Rose-50 #fff1f2):

// text-gray-900 (#111827) – Very strong contrast, best for readability.
// text-gray-800 (#1f2937) – Slightly softer but still highly readable.
// For dark backgrounds (Rose-400 & Rose-500):

// text-white (#ffffff) – Best for strong contrast.
// text-gray-100 (#f3f4f6) – Softer but still readable.
