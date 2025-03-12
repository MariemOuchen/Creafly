/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     darkMode: "class",
     theme: {
          extend: {
               fontFamily: {
                    Inter: ['Inter', 'sans-serif'],
               },
               colors: {
                    accent: "#ffd803",
                    mainHeading: "#272343",
                    subHeading: "#322d57",
                    para: "#3e386c",
                    bg: "#f6f5fa", // Custom background color
                    darkBg: "#0f0e17",
                    darkMainHeading: "#f6f5fa",
                    darkSubHeading: "#e3e2f0",
                    darkPara: "#dad7eb"
               }
          },
     },
     plugins: [],
});
