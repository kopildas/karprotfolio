/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': 'rgb(213, 239, 229)',
        'green-lite' : 'rgb(229,245,239)',
        'custom-box-color': 'rgb(229,199,137)',
        'box-color-1': 'rgb(70,70,70)',
        'box-color-2': 'rgb(211,233,253)',
        'box-color-3': 'rgb(253,238,223)',
        'box-color-4': 'rgb(236,218,242)',
        'box-color-5': 'rgb(206,231,238)',
        'box-color-6': 'rgb(236,212,208)',
        'custom-orange': '#FFA500',
        'custom-slate': '#E4E4E4',
        'custom-white': '#FFFFFF',
        'custom-slate-2': '#B6B6B6',
        'custom-slate-3': '#707070',
        'custom-gr': '#32CD32',
        'back-box-1': 'rgb(229,199,137)'
      },
      
    },
  },
  plugins: [],
}

// <IoMdRewind /> <FaApplePay /> <MdDelete />
// {/* <FaArrowAltCircleRight /> <AiFillQuestionCircle /> <FaCreditCard /> <MdOutlineCancel /> <FaGooglePay /> <FaRegArrowAltCircleDown /> <FaPaypal />*/}