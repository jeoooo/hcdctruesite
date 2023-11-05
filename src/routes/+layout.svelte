<script>
	import '../app.postcss';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import { page } from '$app/stores';
	import Error404 from './components/Error404.svelte';
</script>

<body class="bg-gray-100 font-sans">
	<div class="min-h-screen flex flex-col">
		{#if $page.status == 200}
			<Header />
			<main class="flex-grow">
				<div class="container mx-auto p-4">
					<slot />
				</div>
			</main>
			<Footer />
		{:else if $page.status == 404}
			<div class="flex-grow">
				<slot />
				<Error404 />
			</div>
		{/if}
	</div>
</body>
