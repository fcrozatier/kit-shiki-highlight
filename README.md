# Sveltekit shiki highlighting

Example integration of [shiki](https://github.com/shikijs/shiki) in Sveltekit for syntax highlighting in both SSR and CSR contexts.

- [Mdsvex](https://mdsvex.com/docs) is configured with shiki for server-rendered / pre-rendered pages. See `svelte.config.js` and `/content`

- A `Markdown` component parses markdown dynamically with [marked](https://marked.js.org/) and is configured to use shiki for syntax highlighting. See `src/lib/Markdown.svelte`