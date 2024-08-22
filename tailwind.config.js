/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteRed: "bg-gradient-to-r from-[#bcffa4] to-[#f49872] ",
      },
    },
  },
  plugins: [],
};
