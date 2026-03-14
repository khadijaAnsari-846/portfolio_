import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lofi-pink': '#ffb6c1',
        'lofi-purple': '#dda0dd',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { borderColor: '#ffb6c1' },
          '51%, 100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

export default config;