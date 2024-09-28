/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          25: "#B5DDEE",
          50: "#AED6F1",
          100: "#85C1E9",
          200: "#5DADE2",
          300: "#2E86C1",
          400: "#2874A6",
          500: "#1B4F72",
          
        },
        blue:{
          1000:"131F46",
        }
      }
    },
  },
  plugins: [],
}

