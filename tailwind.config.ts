import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f5ecd8',
        ink: '#1a1a1a',
        gold: '#c9a646',
        shadow: '#2e2e2e',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        crimson: ['var(--font-crimson-pro)', 'serif'],
        garamond: ['var(--font-eb-garamond)', 'serif'],
      },
    },
  },
  plugins: [], // Remove the require line - typography works differently in v4
}

export default config