<script context="module" lang="ts">
	import { getHighlighter, setWasm } from 'shiki';
	import { marked } from 'marked';

	const wasmResponse = await fetch('/shiki/wasm/onig.wasm');
	setWasm(wasmResponse);

	const highlighter = await getHighlighter({
		theme: 'dark-plus',
		langs: ['python'],
		paths: { languages: '/shiki/languages', themes: '/shiki/themes' }
	});

	marked.use({
		headerIds: false,
		mangle: false
	});

	marked.use({
		renderer: {
			code(code, language) {
				return highlighter.codeToHtml(code, { lang: language });
			}
		}
	});
</script>

<script lang="ts">
	export let markdown = '';

	let html = marked.parse(markdown);
</script>

{#await html}
	parsing...
{:then code}
	{@html code}
{/await}
