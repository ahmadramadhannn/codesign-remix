import type { Config } from 'tailwindcss'
import { backgroundColor, textColor } from './lib/tailwind'





export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: 'Fredoka',
        'patrick-hand': 'Patrick Hand',
        'noto-sans': "Noto Sans"
      },
      backgroundColor,
      textColor,
    },
  },
  plugins: [
  ],
} satisfies Config
