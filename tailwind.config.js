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
          secondary: "#F2F2F2",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
