/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        primary: {50:'#f0f9ff',100:'#e0f2fe',200:'#bae6fd',300:'#7dd3fc',400:'#38bdf8',500:'#0ea5e9',600:'#0284c7',700:'#0369a1',800:'#075985',900:'#0c4a6e',950:'#082f49'},
        accent: {400:'#a78bfa',500:'#8b5cf6',600:'#7c3aed'},
        dark: {900:'#030712',800:'#0f172a',700:'#1e293b',600:'#334155'},
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        float: {'0%, 100%': {transform:'translateY(0)'}, '50%': {transform:'translateY(-20px)'}},
        'gradient-x': {
          '0%, 100%': {'background-size':'200% 200%','background-position':'left center'},
          '50%': {'background-size':'200% 200%','background-position':'right center'},
        },
      },
    },
  },
  plugins: [],
};
