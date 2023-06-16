<script lang="ts">
	import { getHighlighter, loadTheme } from 'shiki';
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { escapeSvelte } from 'mdsvex';

	marked.use(
		markedHighlight({
			async: true,
			highlight(code, lang = 'text') {
				return getHighlighter({ theme: 'nord', langs: ['python'] }).then((hl) => {
					return escapeSvelte(hl.codeToHtml(code, { lang }));
				});
			}
		})
	);

	export let data: PageData;

	let html: string;
	$: console.log('html:', html);

	const md = `
# Real good post

This is a post

\`\`\`python
def add(a,b):
  return a+b
\`\`\`
`;

	html = marked.parse(md);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await html}
	parsing
{:then code}
	{@html code}
{/await}

<style lang="postcss">
	p {
		& a {
			color: red;
		}
	}
</style>
