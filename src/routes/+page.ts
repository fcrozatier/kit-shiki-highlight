import type { PageLoad } from './$types';

export const ssr = false;

const paths = import.meta.glob('/src/posts/first.md', { eager: true, as: 'raw' });

export const load: PageLoad = async () => {
	const first = Object.entries(paths)[0];
	console.log('res:', first[1]);

	return { content: first[1] };
};
