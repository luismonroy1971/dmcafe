export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dm-black": "rgb(var(--color-dm-black) / <alpha-value>)",
        "dm-white": "rgb(var(--color-dm-white) / <alpha-value>)",
        "dm-gray": "rgb(var(--color-dm-gray) / <alpha-value>)",
        "dm-bg": "rgb(var(--color-dm-white) / <alpha-value>)",
        "dm-surface": "rgb(var(--color-dm-gray) / <alpha-value>)",
        "dm-red": "rgb(var(--color-dm-red) / <alpha-value>)",
        "dm-blue": "rgb(var(--color-dm-blue) / <alpha-value>)",
        "dm-green": "rgb(var(--color-dm-green) / <alpha-value>)",
        "dm-yellow": "rgb(var(--color-dm-yellow) / <alpha-value>)",
        "dm-cyan": "rgb(var(--color-dm-cyan) / <alpha-value>)",
        "dm-magenta": "rgb(var(--color-dm-magenta) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

