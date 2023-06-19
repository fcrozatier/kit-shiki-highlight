<script lang="ts">
	import Highlight from '$lib/Highlight.svelte';

	const md = `
# Title

Paragraph

\`\`\`python
def add(a,b):
  return a+b
\`\`\`
`;

	let markdown = [md];

	function add() {
		markdown = [...markdown, md];
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={add}>Add</button>

{#each markdown as md}
	<Highlight markdown={md} />
{/each}
