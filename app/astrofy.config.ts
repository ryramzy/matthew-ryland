import { AstrofyConfig } from 'astrofy'

const config: AstrofyConfig = {
  theme: {
    colors: {
      primary: '#2D3748', // midnight
      secondary: '#E2E8F0', // sandBeige
      accent: '#4299E1', // blue
      background: '#1A202C', // dark background
      text: '#F7FAFC', // light text
    },
    typography: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
    },
    spacing: {
      base: '1rem',
      sm: '0.5rem',
      md: '1.5rem',
      lg: '2rem',
    },
  },
  components: {
    button: {
      base: 'rounded-lg px-4 py-2 font-medium transition-colors',
      variants: {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-primary hover:bg-secondary/90',
      },
    },
    card: {
      base: 'rounded-xl p-6 bg-background/50 backdrop-blur-sm border border-secondary/10',
    },
  },
}

export default config 