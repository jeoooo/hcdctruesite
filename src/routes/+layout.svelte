<script>
	import '../app.postcss';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import { page } from '$app/stores';
	import Error404 from './components/Error404.svelte';
</script>

<body>
	{#if $page.status == 200}
		<div class="box">
			<Header />
			<slot />
			<Footer />
		</div>
	{:else if $page.status == 404}
		<div class="box">
			<slot />
			<Error404 />
		</div>
	{/if}
</body>

<style>
	body {
		margin: 0;
	}

	.box {
		width: 100%;
		height: 275px;
	}
</style>
