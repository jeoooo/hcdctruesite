<script lang="ts">
	import { page } from '$app/stores';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div class="container flex flex-col items-center justify-center h-screen">
	<div class=" max-w-[25%]">
		<img src="img/facade.svg" alt="Facade Image" class="w-full" aria-hidden="true" />
	</div>

	<h1
		class="text-4xl p-5"
		aria-label="Page Status: {$page.status}, Error Message: {$page.error?.message}"
	>
		{$page.status}: {$page.error?.message}
	</h1>
	<a href="/">
		<button
			class="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			aria-label="Return to Homepage"
		>
			Return to Homepage
		</button>
	</a>
</div>

<style>
	img {
		width: 100%;
	}

	.container {
		height: 70vh;
	}

	h1 {
		font-family: 'Avenir LT Std Black';
		color: #711019;
	}
	button {
		font-family: 'Avenir LT Std Roman';
		color: #ffffff;
	}
</style>
