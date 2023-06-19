<script context="module" lang="ts">
	import { getHighlighter, setWasm } from 'shiki';

	const wasmResponse = await fetch('/shiki/wasm/onig.wasm');
	setWasm(wasmResponse);

	export const highlighter = await getHighlighter({
		theme: 'dark-plus',
		langs: ['python'],
		paths: { languages: '/shiki/languages', themes: '/shiki/themes' }
	});
</script>

<script lang="ts">
	export let code = '';
	export let language = 'python';
</script>

{@html highlighter.codeToHtml(code, { lang: language })}
