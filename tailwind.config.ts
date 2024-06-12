import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: 'Fredoka',
        'patrick-hand': 'Patrick Hand',
        'noto-sans': "Noto Sans"
      },
      backgroundColor: {
        home: {
          'primary-blue': '#1f4290',
        }
      },
      textColor: {
        home: {
          'brand': '#ffd466'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
