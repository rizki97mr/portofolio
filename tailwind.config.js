/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#0F9DF8",
        background: "#040B1C",
        cardbg: "#061B40",
        white: "#FBFBFB",

        navbg: "#0A214E",

        overLayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
