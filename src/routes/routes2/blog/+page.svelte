<script>
	let { data } = $props();
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="routes2/blog/{slug}">{title}</a></li>
	{/each}
</ul>
