<script>
	import '../app.css';
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<a href="/" class="text-white font-bold text-xl">Logo</a>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<a
							href="/feed"
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Feed</a
						>
						<a
							href="/about"
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>About</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<div class="container mx-auto max-w-2xl">
	<slot />
</div>
