/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // indica a Tailwind dónde buscar clases
];
export const theme = {
  extend: {
    fontFamily: {
      fredoka: ['"Fredoka"', 'cursive'], // agregamos la fuente
    },
  },
};
export const plugins = [];
  