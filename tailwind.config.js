/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Professional slate-900 background
        foreground: "#f8fafc", // Clean slate-50 light text
        primary: "#3b82f6",    // Professional royal blue accent
        muted: "#1e293b",      // Slightly lighter slate for cards
        "muted-text": "#cbd5e1" // Slate-300 for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
