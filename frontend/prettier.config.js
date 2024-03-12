/** @type {import('prettier').Config} */
const config = {
	bracketSameLine: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};

export default config;
