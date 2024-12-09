/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  safelist: ["dark"],
  prefix: "i_",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        container: "var(--container)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        blue: {
          DEFAULT: "var(--blue)",
          hover: "var(--blue-hover)",
        },
        foreground: {
          DEFAULT: "var(--primary-foreground)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 5px)`,
        sm: "calc(var(--radius) - 10px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
