<script lang="ts">
	// Whatever +page.server.ts load() returns is available as `data` here.
	export let data;
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-3xl font-bold my-6 text-center">Crazy Feed</h1>
	{#if data.posts}
		{#each data.posts as post}
			<div class="bg-white p-4 rounded-lg shadow-md flex flex-row">
				<img
					src="https://picsum.photos/seed/{post.title + Math.random()}/128"
					alt="post thumbnail"
					class="w-24 h-24 rounded-lg"
				/>
				<div class="flex flex-col gap-2 ml-4">
					<h2 class="text-xl font-bold">{post.title}</h2>
					<p>{post.body}</p>
				</div>
			</div>
		{/each}
	{/if}
	{#if data.error}
		<p class="text-red-500">{data.error}</p>
	{/if}
</div>
