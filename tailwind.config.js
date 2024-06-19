/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "customDark": '#18122f',
        'customGrey': '#787C83',
        'customPurple': '#7158DC',
      },
      keyframes: {
        growShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounceY: 'bounceY 1s infinite',
        growShrink: 'growShrink 1s infinite',
      },
    },
  },
  plugins: [],
}
