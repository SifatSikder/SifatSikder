/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        "xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        "lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        "md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        "xs": { max: "479px" },
        // => @media (max-width: 479px) { ... }

        "max-2xl": { max: "1535px" },
        // => @media not all (max-width: 1535px) { ... }
        "max-xl": { max: "1279px" },
        // => @media not all (max-width: 1279px) { ... }
        "max-lg": { max: "1023px" },
        // => @media not all (max-width: 1023px) { ... }
        "max-md": { max: "767px" },
        // => @media not all (max-width: 767px) { ... }
        "max-sm": { max: "639px" },
        // => @media not all (max-width: 639px) { ... }
        "max-xs": { max: "479px" },
        // => @media not all (max-width: 479px) { ... }
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#800080", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        tailwind: "#66CCFF",
        nginx: "#009639",
        git: "#F44D27",
        framer: "#AB30FF",
        typescript: "#2F74C0",
        Selenium: "#0033A0",
        Jest: "#94404D",
        Docker: "#1D63ED",
        MongoDB: "#023430",

        AngularJS: "#DD1B16",
        ReactJS: "#087EA4",
        NodeJS: "#54A245",
        FastAPI: "#059487",

        C: "#00427E",
        CPP: "#00427E",
        Java: "#507E9C",
        Python: "#366C9C",


        Dart: "#0899C9",
        Flutter: "#5FC9F8",
        Javascript: "#F0D356",
        PHP: "#4D588E",




      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,#f5f5f5 100px);'
      },

    },
  },
  plugins: [],
}
