/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      tealBlue900: '#121926',
      tealBlue800: '#202939',
      tealBlue700: '#364152',
      tealBlue600: '#4B5565',
      tealBlue500: '#697586',
      tealBlue400: '#9AA4B2',
      tealBlue300: '#CDD5DF',
      tealBlue200: '#E3E8EF',
      tealBlue100: '#EEF2F6',
      tealBlue50: '#F8FAFC',
      aquaBlue900: '#164C63',
      aquaBlue800: '#155B75',
      aquaBlue700: '#0E7090',
      aquaBlue600: '#088AB2',
      aquaBlue500: '#06AED4',
      aquaBlue400: '#22CCEE',
      aquaBlue300: '#67E3F9',
      aquaBlue200: '#A5F0FC',
      aquaBlue100: '#CFF9FE',
      aquaBlue50: '#ECFDFF',
      aqualBlue25: '#F5FEFF',
      border1: '#EAECF0',
      border2: '#F2F4F7',
      textColor1: '#121926',
      textColor2: '#4B5565',
      textColor3: '#9AA4B2',
      davyGrey: '#EEF2F6',
      milkyWhite: '#F8FAFC',
      milkyWhite2: '#FCFCFD',
      border: '#E8F2FA',
      coralRed: '#F04438',
      darkOrange: '#F79009',
      greenTeal: '#12B76A',
      clearBlue: '#2E90FA',
      blueEyes: '#175CD3',
      white: '#ffff',
      lightBlue: '#9FA7A8',
      darkBlue: '#1C2B2E',

      // bgHover:
      //   'linear-gradient(133.75deg, #9349CD 13.71%, #2886DD 56.48%, #5BC686 95.83%)',
    },
    borderWidth: {
      3: '3px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      widesm: '0.04em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    screens: {
      xxs: '270px',
      mobile_md: '429px',
      mobile: '500px',
      tablet: '768px',
      md: '846px',
      md_l: '880px',
      md_xl: '1328px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: () => ({
        'gradient-primary':
          'linear-gradient(133.75deg, #9349CD 13.71%, #2886DD 56.48%, #5BC686 95.83%)',
      }),
      fontFamily: {
        Supreme: ['Supreme', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      spacing: {
        '90px': '90px',
        7.5: '1.875rem',
        3.75: '0.0375rem',
        '28rem': '28rem',
        '397px': '397px',
        '116px': '116px',
        '50px': '50px',
        '270px': '270px',
      },
    },
  },
  plugins: [],
};
