/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.2)",
          },
          "66%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },

        animation: {
          blob: "blob 10s infinite",
        },
        backgroundImage: {
          "skills-gradient": `
            radial-gradient(circle at top left, rgba(204, 0, 187, 0.15), transparent 60%),
            radial-gradient(circle at bottom right, rgba(0, 70, 209, 0.15), transparent 60%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)
          `,
        }
        
        
      },
    },
  },
  
  plugins: [],
};
