
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#393738",
        tertiary: "#4F7CAC",
        "dark-layer-1": "rgba(40,40,40, 0.15)",
        "dark-layer-2": "rgb(26,26,26)",
        "dark-label-2": "rgba(239, 241, 246, 0.75)",
        "dark-divider-border-2": "rgb(61, 61, 61)",
        "dark-fill-2": "hsla(0,0%,100%,.14)",
        "dark-fill-3": "hsla(0,0%,100%,.1)",
        "dark-gray-6": "rgb(138, 138, 138)",
        "dark-gray-7": "rgb(179, 179, 179)",
        "gray-8": "rgb(38, 38, 38)",
        "dark-gray-8": "rgb(219, 219, 219)",
        "brand-orange": "rgb(255 161 22)",
        "brand-orange-s": "rgb(193, 122, 15)",
        "dark-yellow": "rgb(255 192 30)",
        "dark-pink": "rgb(255 55 95)",
        olive: "rgb(0, 184, 163)",
        "dark-green-s": "rgb(44 187 93)",
        "dark-blue-s": "rgb(10 132 255)",
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '1000': '1000ms',
      },
      screens: {
        sm: "640px", // Small screens, like smartphones
        md: "768px", // Medium screens, like tablets
        lg: "1024px", // Large screens, like laptops
        xl: "1280px", // Extra large screens, like desktops
        "2xl": "1536px", // Extra extra large screens
        // Add more custom screen sizes as needed
      },
    },

    animation: {
      slideup: "slideup 1s ease-in-out",
      slidedown: "slidedown 1s ease-in-out",
      slideleft: "slideleft 1s ease-in-out",
      slideright: "slideright 1s ease-in-out",
      wave: "wave 1.2s linear infinite",
      slowfade: "slowfade 2.2s ease-in-out",
      bounce: "bounce 1s infinite",
      grow: "grow 1s ease-in forwards",
      fadeInUp: 'fadeInUp 1s ease-out forwards',
      fadeInOut: "fadeInOut 2s linear infinite",
      minimize: 'minimizeEffect 0.5s ease-in-out forwards',
      maximize: 'maximizeEffect 0.5s ease-in-out forwards',
    },

    keyframes: {
      slideup: {
        from: { opacity: "0", transform: "translateY(25%)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slidedown: {
        from: { opacity: "0", transform: "translateY(-25%)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideleft: {
        from: { opacity: "0", transform: "translateX(-20px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slideright: {
        from: { opacity: "0", transform: "translateX(20px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slowfade: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      bounce: {
        '0%, 100%': { 
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)', // Optional if you want to include it here
        },
        '50%': { 
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)', // Optional if you want to include it here
        },
      },
      grow: {
        from: { transform: "scale(0.6)" },
        to: { transform: "scale(1)" },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeInOut: {
        '0%': { opacity: '1' },
        '50%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      minimizeEffect: {
        '0%': {
          transform: 'translateY(0) scale(1)',
          opacity: '1',
        },
        '100%': {
          transform: 'translateY(100px) scale(0.5)',
          opacity: '0',
        },
      },
      maximizeEffect: {
        '0%': {
          transform: 'translateY(100px) scale(0.5)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0) scale(1)',
          opacity: '1',
        },
      },
    },
    plugins: [],
  },
};



export default config;