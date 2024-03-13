import konstaConfig from 'konsta/config';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...fontFamily.sans]
			}
		}
	},
	plugins: []
} satisfies Config;

export default konstaConfig(config);
