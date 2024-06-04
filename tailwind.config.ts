import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindAnimate from 'tailwindcss-animate'

export default {
  darkMode: ["class"],
  prefix: "",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // shadcn
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      'big-screen': '1540px'
    },
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
        },
        
        border: "var(--theme-6)",
        input: "var(--theme-6)",
        ring: "var(--theme-6)",
        background: "var(--theme-2)",
        foreground: "var(--theme-12)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--theme-3)",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--theme-3)",
          foreground: "var(--theme-12)",
        },
        popover: {
          DEFAULT: "var(--theme-1)",
          foreground: "var(--theme-12)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config