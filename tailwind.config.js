/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#00A7FF",
      secondary: "#007FFF",
      warning: "#ffcc00",
      success: "#4BB543",
      error: "#cc3300",
    },
    extend: {},
  },
  plugins: [],
};
