import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindAnimate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["DM Sans", ...defaultTheme.fontFamily.sans],
      'mono': ["DM Mono", ...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        theme: {
          1: "var(--theme-1)",
          2: "var(--theme-2)",
          3: "var(--theme-3)",
          4: "var(--theme-4)",
          5: "var(--theme-5)",
          6: "var(--theme-6)",
          7: "var(--theme-7)",
          8: "var(--theme-8)",
          9: "var(--theme-9)",
          10: "var(--theme-10)",
          11: "var(--theme-11)",
          12: "var(--theme-12)",
        }
      }
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config