<script lang="ts">
	import Faq from '../components/FAQ.svelte';
</script>

<svelte:head>
	<title>FAQ</title>

	<!-- Primary Meta Tags -->
	<meta name="title" content="HCDC True Site: Are HCDC websites down?" />
	<meta name="description" content="HCDC True Site: Are HCDC websites down?" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hcdctruesite.vercel.app/" />
	<meta property="og:title" content="HCDC True Site: Are HCDC websites down?" />
	<meta property="og:description" content="HCDC True Site: Are HCDC websites down?" />
	<meta property="og:image" content="https://i.imgur.com/Fl4qygc.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://hcdctruesite.vercel.app/" />
	<meta property="twitter:title" content="HCDC True Site: Are HCDC websites down?" />
	<meta property="twitter:description" content="HCDC True Site: Are HCDC websites down?" />
	<meta property="twitter:image" content="https://i.imgur.com/Fl4qygc.png" />

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>
<main class="pt-4 flex flex-col items-center justify-center">
	<!-- ... (your existing code) ... -->
	<h1 class="text-[24px] min-[425px]:text-xxl lg:text-[32px] font-bold pt-8 pb-3 text-[#711019]">
		HCDC TRUE SITE
	</h1>
	<h2 class="text-[16px] min-[425px]:text-lg lg:text-[26px] font-bold pt-3 pb-8 text-[#711019]">
		Frequently Asked Questions (FAQ)
	</h2>
	<Faq />
</main>

<style>
	h1,
	h2 {
		font-family: 'Avenir LT Std Black';
	}
</style>
