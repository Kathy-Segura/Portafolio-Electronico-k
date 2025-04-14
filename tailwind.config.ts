import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New vibrant color palette
        neon: {
          cyan: "#00FFFF",
          purple: "#D000FF",
          pink: "#FF00FF",
          blue: "#00BFFF",
          green: "#00FF9D",
          yellow: "#FFDD00",
          orange: "#FF7700",
          red: "#FF0066",
        },
        // Gradient stops
        gradient: {
          start: "#00FFFF",
          mid: "#D000FF",
          end: "#FF00FF",
          alt1: "#00BFFF",
          alt2: "#00FF9D",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom",
          },
        },
        "gradient-xy": {
          "0%": {
            "background-position": "0% 0%",
          },
          "25%": {
            "background-position": "100% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "75%": {
            "background-position": "0% 100%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
        "border-flow": {
          "0%, 100%": {
            "border-color": "#00FFFF",
          },
          "25%": {
            "border-color": "#D000FF",
          },
          "50%": {
            "border-color": "#FF00FF",
          },
          "75%": {
            "border-color": "#00BFFF",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            "box-shadow": "0 0 15px 5px rgba(0, 255, 255, 0.5)",
          },
          "25%": {
            "box-shadow": "0 0 15px 5px rgba(208, 0, 255, 0.5)",
          },
          "50%": {
            "box-shadow": "0 0 15px 5px rgba(255, 0, 255, 0.5)",
          },
          "75%": {
            "box-shadow": "0 0 15px 5px rgba(0, 191, 255, 0.5)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 25s linear infinite",
        tilt: "tilt 10s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "border-flow": "border-flow 8s linear infinite",
        "glow-pulse": "glow-pulse 8s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dot-pattern": "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "noise-pattern":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        "cyber-grid":
          "linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(208, 0, 255, 0.1) 1px, transparent 1px)",
        "neon-glow": "radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, transparent 70%)",
        "neon-grid":
          "linear-gradient(to right, rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(208, 0, 255, 0.2) 1px, transparent 1px)",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgba(0, 255, 255, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(208, 0, 255, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255, 0, 255, 0.3) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(0, 191, 255, 0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 255, 157, 0.3) 0px, transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
