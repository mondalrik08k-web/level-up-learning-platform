/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Adding a custom background image
        'explore': "url('src/assets/WhatsApp Image 2024-09-02 at 11.03.22 PM (2).jpeg')",
      },
    },
  },
  plugins: [],
}