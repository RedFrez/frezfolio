/** @type {import('tailwindcss').Config} */
export default {
    presets: [
        require('./src/assets/presets/color.ts'),
        require('./src/assets/presets/layout.ts'),
        require('./src/assets/presets/size.ts'),
        require('./src/assets/presets/typography.ts'),
    ],
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('tailwindcss-animate')],
}
