/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main": '#f2f2f2',
        "alert": "#e31010",
        "success": "#07e633",
        "hoverBlack": "#333333"
      },
    },
  },
  plugins: [],
}
