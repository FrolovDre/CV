import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#28e0a6',
          light: '#3febbe',
          dark: '#1fa17c'
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          light: '#a784fb',
          dark: '#6d3ec5'
        },
        background: {
          DEFAULT: '#0a192f',
          subtle: '#0f2547'
        }
      },
      boxShadow: {
        glow: '0 0 15px 3px rgba(40, 224, 166, 0.4)',
        inner: 'inset 0 0 10px rgba(255, 255, 255, 0.05)'
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20%, -30%) rotate(45deg)' }
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-25%, 20%) rotate(-60deg)' }
        }
      },
      animation: {
        float1: 'float1 30s ease-in-out infinite',
        float2: 'float2 35s ease-in-out infinite'
      },
      borderRadius: {
        pill: '9999px'
      }
    }
  },
  plugins: []
};

export default config;