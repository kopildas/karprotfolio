/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': 'rgb(213, 239, 229)',
        'color-palate-2' : '#364B44',
        'color-palate-3' : '#A0B4C9',
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
        'back-box-1': 'rgb(229,199,137)',
        'cust-one': '#F24E1E',
        'cust-two': '#000000',
        'cust-three': '#FFE6D9',
        'cust-four': '#73A58B',
        'cust-five': '#FFFFFF',
        'cust-six': '#231F20',
        'cust-seven': '#D9D9D9',
        'cust-eight': '#EFEDE0',
        'cust-nine': '#B3B3B3',
        'cust-ten': '#53686A',
        'cust-elv': '#FE9C69',
        'cust-twv': '#ED6C30',
      },
      colors: {
        'heading-col-1': '#2d1339'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'blob': '51% 49% 52% 48% / 41% 47% 53% 59%'
      }
      
    },
  },
  plugins: [],
}

// <CiSearch /> <BsChatRightText />
// <HiOutlineMailOpen /> <MdCancel /> <IoIosArrowBack />
// <IoIosArrowDown /> <MdOutlineDesktopWindows />
// <ImUser /> <ImCross /> <ImCart />
