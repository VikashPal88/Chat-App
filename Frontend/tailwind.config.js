/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#1C1C1E",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180.2deg, rgb(20, 20, 20) 6.8%, rgb(40, 30, 30) 131%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
