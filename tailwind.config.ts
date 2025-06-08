// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Verifique se estes caminhos ainda estão corretos para sua estrutura de pastas
  ],
  theme: {
    extend: {
      colors: {
        // Sua paleta de cores azuis arrojadas
        'dark-blue-bg': '#0B0E23', // Azul muito escuro para o fundo principal
        'primary-blue': '#1A74E9', // Azul vibrante para elementos de destaque e botões
        'secondary-blue': '#5B9DFF', // Azul claro para destaques secundários e hover
        'text-light': '#E0E0E0', // Cinza claro para texto principal
        'text-medium': '#888888', // Cinza médio para texto secundário

        // NOVOS TONS DE VERDE LEVES
        'accent-green-light': '#84D9C8', // Um verde água claro e suave
        'accent-green-dark': '#2ecc71',   // Um verde esmeralda vibrante, mas não agressivo
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config