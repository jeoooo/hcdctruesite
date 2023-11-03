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
	@font-face {
		font-family: 'Avenir LT Std Black';
		src: url('fonts/AvenirLTStd-Black.otf') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Avenir LT Std Roman';
		src: url('fonts/AvenirLTStd-Roman.otf') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Avenir LT Std Book';
		src: url('fonts/AvenirLTStd-Book.otf') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	body {
		margin: 0;
	}

	.box {
		width: 100%;
		height: 275px;
	}
</style>
