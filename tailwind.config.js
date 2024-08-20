/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    // extend: {
    //   maskImage: {
    //     'custom-mask': '-webkit-linear-gradient(top, transparent, transparent 0, white 10%, white 80%, transparent 100%)',
    //   },
    // },
  },
  plugins: [],
  // plugins: [
  //   function({ addUtilities }) {
  //     const newUtilities = {
  //       '.mask-box-image-custom': {
  //         '-webkit-mask-box-image': '-webkit-linear-gradient(top, transparent, transparent 0, white 10%, white 80%, transparent 100%)',
  //       },
  //     }

  //     addUtilities(newUtilities, ['responsive', 'hover'])
  //   },
  // ],
};
