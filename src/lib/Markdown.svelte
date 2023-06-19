<script context="module" lang="ts">
	import { marked } from 'marked';
	import { highlighter } from './Highlight.svelte';

	marked.use({
		headerIds: false,
		mangle: false,
		renderer: {
			code(code, language) {
				return highlighter.codeToHtml(code, { lang: language });
			}
		}
	});
</script>

<script lang="ts">
	export let markdown = '';
</script>

{#await marked.parse(markdown)}
	parsing...
{:then html}
	{@html html}
{/await}
