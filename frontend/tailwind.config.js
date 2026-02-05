/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Main color (60% usage) - Cream/Ivory
                main: {
                    50: '#FFFEF9',
                    100: '#FCF5E5',
                    200: '#F9EDD0',
                    300: '#F6E5BB',
                    400: '#F3DDA6',
                    500: '#FCF5E5', // Base
                    600: '#E8DECA',
                    700: '#D4C7AF',
                    800: '#C0B094',
                    900: '#AC9979',
                },
                // Accent color (30% usage) - Deep Brick Red
                accent: {
                    50: '#FDE8E9',
                    100: '#F9C1C3',
                    200: '#F59A9D',
                    300: '#D16669',
                    400: '#B3444A',
                    500: '#9B2226', // Base
                    600: '#871E21',
                    700: '#731A1D',
                    800: '#5F1618',
                    900: '#4B1214',
                },
                // Tertiary color (10% usage) - Saffron Yellow
                tertiary: {
                    50: '#FEF8ED',
                    100: '#FCEFC7',
                    200: '#F9E6A1',
                    300: '#F6DD7B',
                    400: '#F3D555',
                    500: '#E9C46A', // Base
                    600: '#D4B060',
                    700: '#BF9C56',
                    800: '#AA884C',
                    900: '#957442',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
