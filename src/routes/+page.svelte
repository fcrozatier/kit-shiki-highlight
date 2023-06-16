<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

	const html = marked.parse(data.content);
	console.log('html:', html);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{@html html}

<style lang="postcss">
	p {
		& a {
			color: red;
		}
	}
</style>
