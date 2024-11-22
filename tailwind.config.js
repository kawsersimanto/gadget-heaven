import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1280px",
        },
      },
      colors: {
        primary: "#9538E2",
        "white-gray-100": "#f3f3f3",
        "light-gray-200": "rgba(9,8,15,0.60)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9538E2",
        },
      },
    ],
  },
  plugins: [daisyui],
};
