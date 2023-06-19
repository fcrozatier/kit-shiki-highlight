<script lang="ts">
	import Markdown from '$lib/Markdown.svelte';
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

<Highlight
	code={`def hello():
	return "hi"
`}
/>

<button on:click={add}>Add</button>

{#each markdown as md}
	<Markdown markdown={md} />
{/each}
