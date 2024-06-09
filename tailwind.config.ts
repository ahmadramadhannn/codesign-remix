import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: 'Fredoka',
        'patrick-hand': 'Patrick Hand',
        'noto-sans': "Noto Sans"
      }
    },
  },
  plugins: [],
} satisfies Config
