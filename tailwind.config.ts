import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Styles/styles.ts",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        IntroIMG: "url('/Assets/neces/Untitled_drawing.png')",
      },
      screens: {
        xs: "360px",
        sm: "470px",
        md: "750px",
        lg: "840px",
        xl: "1440px",
      },
      colors: {
        main_color: "#1e90ff",
      },
    },
  },
  plugins: [],
};
export default config;
