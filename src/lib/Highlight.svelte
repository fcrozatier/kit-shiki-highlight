<script context="module" lang="ts">
	import { browser } from '$app/environment';
	import { getHighlighter } from 'shiki';

	export const highlighter = await getHighlighter({
		theme: 'nord',
		langs: ['python'],
		paths: browser
			? { languages: '/shiki/languages', themes: '/shiki/themes', wasm: '/shiki/wasm/' }
			: undefined
	});
</script>

<script lang="ts">
	export let code = '';
	export let language = 'python';
</script>

{@html highlighter.codeToHtml(code, { lang: language })}
