import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayCustom: '#43515B',
        grayProduct: '#4E575F',
        lineP: '#FEFDE4',
      },
      height: {
        '160': '40rem',  // 640px
        '176': '44rem',  // 704px
      },
    },
  },
  plugins: [],
};
export default config;
