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

<h1>Reuse highlight</h1>

<button on:click={add}>Add</button>

{#each markdown as md}
	<Highlight markdown={md} />
{/each}
