import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const data = import.meta.glob('/src/posts/first.md');
	console.log('data:', data);

	return new Response();
};
