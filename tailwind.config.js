/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        emerald: {
          primary: "#6CA73F",
          secondary: "#0D6739",
          accent: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
