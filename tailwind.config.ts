import { type Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        proxima: ['"Proxima Nova"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // already loaded from Google Fonts
      },
    },
  },
  plugins: [],
}

export default config
