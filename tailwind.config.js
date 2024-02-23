/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      invert: {
        0: 'invert(0)',
        DEFAULT: 'invert(1)',
      },
      colors: {
        // Light mode colors
        "gray-darker": "#131313",
        "gray-dark": " #272727",
        "gray-lighter": "#e7e7e7",
        "stone-white": "#f2f2f2",
        "arbitrum-one-blue": " #1b4add",
        "arbitrum-nova-orange": " #f70",
        "arbitrum-orbit-blue": " #12aaff",
        "arbitrum-stylus-pink": "#e3066e",
        "atmosphere-blue-dark": "#152c4e",
        "atmosphere-blue-light": " #8594b4",
        "lime-dark": "#31572a",
        success: " #47d32f",
        'border_color': 'hsla(0,0%,100%,.6)',
        'bg_1': 'hsla(0,0%,100%,.1)',
        'bg_2': 'rgba(0,0,0,.05)',
        'bg_3': 'hsla(0,0%,100%,.1)',
        'bg_4': 'rgba(0,0,0,.05)',
        'border_color_2': 'hsla(0,0%,100%,.1)',

        // Dark mode colors
        "dark-gray-darker": "#f2f2f2",
        "dark-gray-dark": " #e7e7e7",
        "dark-gray-lighter": "#131313",
        "dark-stone-white": "#131313",
        "dark-arbitrum-one-blue": " #1b4add",
        "dark-arbitrum-nova-orange": " #f70",
        "dark-arbitrum-orbit-blue": " #12aaff",
        "dark-arbitrum-stylus-pink": "#e3066e",
        "dark-atmosphere-blue-dark": "#8594b4",
        "dark-atmosphere-blue-light": " #152c4e",
        "dark-lime-dark": "#f2f2f2",
        "dark-success": " #47d32f",
      },
      
      backgroundImage: {
        bg_100:
          "linear-gradient(75deg, rgba(21, 44, 78, .9) 100%, rgba(21, 90, 228, 1))",
        bg_200:
          "linear-gradient(90deg,rgba(68,98,155,.8),rgba(21,90,228,.3))",
        bg_300:
          "linear-gradient(277deg,hsla(0,0%,87%,0),#8695aa 48.44%,hsla(0,0%,87%,0));",
        bg_400:
          "linear-gradient(0deg,rgba(51,80,186,.5),#000);",
        bg_500:
          "linear-gradient(0deg,rgba(68,98,155,.9),hsla(0,0%,100%,.1))",
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [
    
 
  ],
};
