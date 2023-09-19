/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#45FFCA", // Your custom primary color
        primary2: "#071952",
        secondary:'#070c52',
        // You can define more custom colors here
      },
      width: {
        'custom-container': "1024px", // Use hyphens to separate words
      },
    },
  },
  plugins: [],
};
