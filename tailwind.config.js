import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        DEFAULT: "1280px",
        center: true,
        screens: {
          DEFAULT: "1280px",
        },
      },
      colors: {
        primary: "#9538E2",
      },
    },
  },
  plugins: [daisyui],
};
