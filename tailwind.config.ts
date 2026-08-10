import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepNavy: '#091126',
        electricBlue: '#2f6eff',
        cyan: '#00d8d6',
        purple: '#8d4fff',
        green: '#1bd97b',
        yellow: '#fcd34d',
        light: '#f8fafc'
      },
      boxShadow: {
        soft: '0 24px 64px rgba(9, 17, 38, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
