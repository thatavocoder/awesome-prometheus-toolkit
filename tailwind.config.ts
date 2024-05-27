import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        overlay: '#27374780',
      },
      backgroundImage: {
        'search-icon': 'url("/search.svg")',
      },
      backgroundPosition: {
        'left-4': '1rem center',
      },
      backgroundSize: {
        '4': '1rem',
      },
      width: {
        '4.5': '1.125rem',
      },
      height: {
        '4.5': '1.125rem',
      },
      padding: {
        '4.5': '1.125rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      boxShadow: {
        custom:
          '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      maxHeight: {
        '4/5': '80%',
      },
    },
  },
  plugins: [],
};
export default config;
