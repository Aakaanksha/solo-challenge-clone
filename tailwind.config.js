/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto-font)", "sans-serif"],
      },
      colors: {
        accent: "#512da7",
        lime: "#7db343",
        gray: "#3e474e",
      },
    },
  },
  plugins: [],
};
