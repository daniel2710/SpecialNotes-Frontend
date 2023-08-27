/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-rich-black',
    'bg-cherry-red',
    'bg-cliff-blue',
    'bg-qahvei-brown',
  ],
  theme: {
    extend: {
      colors: {
        // Main colors app:
        "light": '#f2f2f2',
        "rich-black": '#171a21',
        "paynes": '#617073',
        // UI
        "alert": "#e31010",
        "success": "#07e633",
        "hoverBlack": "#333333",
        // Options bg notes:
        "cherry-red": "#77172E",
        "cliff-blue": "#5690BA",
        "qahvei-brown": "#7C4A03"
      },
    },
  },
  plugins: [
 
  ]
}
