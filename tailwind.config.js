module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'sticky-footer': '0 -1px 4px 0 rgba(0, 0, 0, 0.2)',
      },
      borderColor: {
        'madison-50': 'rgb(193 207 222 / <alpha-value>)',
      },
      backgroundImage: {
        'striped-gradient': 'linear-gradient(45deg, #0e5aa7 25%, #6293c5 0, #6293c5 50%, #0e5aa7 0, #0e5aa7 75%, #6293c5 0, #6293c5)',
      },
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
        polo: {
          50: 'rgb(223 232 242 / <alpha-value>)',
        },
        secondary: 'rgba(14, 90, 167, 0.05)',
        'c4blue-100': 'rgb(146 180 215 / <alpha-value>)',
        c4red: {
          500: 'rgb(188 30 32 / <alpha-value>)',
        },
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
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
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
        'move-stripes': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 0px' },
        },
        'progress-linear': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeLoop: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'custom-fade': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        popup: 'popup 0.5s ease forwards',
        'shimmer': 'shimmer 1.2s ease-in-out infinite',
        'loading-spin': 'loading-spin 0.6s linear infinite',
        strips: 'move-stripes 1s linear infinite',
        'progress-linear': 'progress-linear 1.5s linear infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        'custom-loop': 'fadeLoop 1.3s ease infinite',
        'custom-fade': 'custom-fade 1.3s ease 0.2s infinite',
        'custom-fade3': 'custom-fade 1.3s ease 0.3s infinite',
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
