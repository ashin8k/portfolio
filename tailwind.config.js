/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090E', // Deepest background
          900: '#0B0F19', // Main background
          850: '#101626', // Elevated card surface
          800: '#172036', // Card hover / distinct layers
          750: '#1E2945', // Highlight borders
          700: '#263456', // Subtle divider
          600: '#3D4F7C', // Muted borders
        },
        accent: {
          cyan: '#38BDF8',
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          purple: '#A855F7',
          emerald: '#10B981',
        },
        brand: {
          primary: '#6366F1',
          primaryHover: '#4F46E5',
          secondary: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 16px -3px rgba(99, 102, 241, 0.18)',
        'glow-md': '0 0 28px -4px rgba(99, 102, 241, 0.28)',
        'glow-lg': '0 0 45px -5px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 28px -4px rgba(56, 189, 248, 0.22)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
