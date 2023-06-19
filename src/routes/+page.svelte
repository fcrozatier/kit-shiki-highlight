<script lang="ts">
	import Markdown from '$lib/Markdown.svelte';
	import Highlight from '../lib/Highlight.svelte';

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

<h2>Code block</h2>

<Highlight
	code={`def hello():
	return "hi"
`}
/>

<button on:click={add}>Add</button>

{#each markdown as md}
	<Markdown markdown={md} />
{/each}
