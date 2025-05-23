module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-3': '386px 2fr 2fr',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      stroke: ['group-disabled'],
      colors: {
        'primary-blue': '#0e5aa7',
        gray230: 'rgb(230, 230, 230)',
        primary: 'rgb(14 90 167)',
      },
      maxWidth: {
        'screen-2xl': '1440px', // or use any name like '1440'
      },
      minWidth: {
        auto: 'auto',
      },
      minHeight: {
        auto: 'auto',
      },
      screens: {
        'xs': '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1440px',
        '2xl': '1536px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        popup: {
          '0%': {
            transform: 'scale3d(0.8, 0.8, 0.8)',
            boxShadow: 'rgba(243, 64, 65, 0.3) 0px 0px 10px 0px',
            opacity: '0',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
            boxShadow: 'rgba(243, 64, 65, 0.1) 0px 0px 0px 0px',
            opacity: '1',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200px 0',
          },
          '100%': {
            backgroundPosition: '100% 0',
          },
        },
        'loading-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        popup: 'popup 0.5s ease forwards',
        'shimmer': 'shimmer 1.2s ease-in-out infinite',
        'loading-spin': 'loading-spin 0.6s linear infinite',
      },
      aspectRatio: {
        'slim-hero-banner': '1232 / 280',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
