
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },
      colors: {
        cosmic: {
          black: '#000000',
          navy: '#0a192f',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          indigo: '#4f46e5',
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cosmic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      backdropBlur: {
        'cosmic': '20px',
      }
    },
  },
  plugins: [],
}