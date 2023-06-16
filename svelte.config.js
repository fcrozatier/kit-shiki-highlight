import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { escapeSvelte, mdsvex } from 'mdsvex';
import { getHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions;} */
export const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const hl = await getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(hl.codeToHtml(code, { lang }));
			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [preprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
