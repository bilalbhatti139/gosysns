/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0DD999", // Your custom primary color
        primary2: "#091E2E",
        secondary:'#021626',
        // You can define more custom colors here
      },
      maxWidth: {
        'custom-container': "1024px", // Use hyphens to separate words
      },
    },
  },
  plugins: [],
};
