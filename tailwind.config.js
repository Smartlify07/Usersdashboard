/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    safelist: [
      "transition-all",
      "duration-300",
      "ease-in-out", // Add any other classes you use for transitions
    ],
  },

  theme: {
    extend: {
      fontFamily: {
        commissioner: "Commissioner, sans-serif",
        poppins: "Poppins,sans-serif",
      },

      colors: {
        primary: "#5932EA",
        pinkoutline: "#D2397E",
        darkpink: "#1A0710D9",
        status: "#6BC62D",
      },
      dropShadow: {
        lightblue: "0px 10px 60px #E2ECF9",
      },
    },
  },
  plugins: [],
};
