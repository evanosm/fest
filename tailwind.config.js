/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#4158D0",
      variant: "#C850C0",
      dark: "#100B10",
      light: "#EAE7EA",
    },
  },
  plugins: [],
}
