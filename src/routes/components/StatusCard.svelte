<script>
	import StatusBadge from './StatusBadge.svelte';

	export let url = 'https://www.example.com/';
	export let websiteText = 'www.example.com';
	export let officialText = 'Card Description';
	export let operationalText = 'undefined';
</script>

{#if operationalText == 'Online'}
	<div class="component shadow-md h-32 bg-green-50">
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-green-800 dark:text-[#053772] hover:underline"
		>
			<h3>{websiteText}</h3>
		</a>
		<StatusBadge status={operationalText} />

		<p class="text-l pl-4 pt-6">{officialText}</p>
	</div>
{:else if operationalText == 'Experiencing Issues'}
	<div class="component shadow-md h-32 bg-red-50">
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-red-800 dark:text-[#053772] hover:underline"
		>
			<h3>{websiteText}</h3>
		</a>
		<StatusBadge status={operationalText} />

		<p class="text-l pl-4 pt-6">{officialText}</p>
	</div>
{:else}
	<!-- ? LOADING  -->
	<div class="component shadow-md h-32 bg-yellow-50">
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-yellow-800 dark:text-[#053772] hover:underline"
		>
			<h3>{websiteText}</h3>
		</a>
		<StatusBadge status={operationalText} />

		<p class="text-l pl-4 pt-6">{officialText}</p>
	</div>
	<!-- <div class="component shadow-md h-32 bg-green-50">
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-green-800 dark:text-[#053772] hover:underline"
		>
			<h3>{websiteText}</h3>
		</a>
		<StatusBadge status={operationalText} />

		<p class="text-l pl-4 pt-6">{officialText}</p>
	</div> -->
{/if}

<style>
	.component {
		position: relative;
		width: 70%;

		border: 2px solid;
		border-color: #00000020;
		border-radius: 15px;
		margin: 10px;
	}
	h3 {
		font-family: 'Avenir LT Std Black';
	}
	p {
		font-family: 'Avenir LT Std Book';
	}
</style>
