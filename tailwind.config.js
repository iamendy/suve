/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        maven: ["var(--maven)"],
        paytone: ["var(--paytone)"],
      },
    },
  },
  plugins: [],
};
