<script lang="ts">
	import FAQ from './components/FAQ.svelte';
	import StatusCard from './components/StatusCard.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { Alert } from 'flowbite-svelte';

	let proxy_urls: string[] = [
		'https://corsproxy.io/?' + encodeURIComponent('https://www.hcdc.edu.ph/'),
		'https://corsproxy.io/?' + encodeURIComponent('http://studentportal.hcdc.edu.ph/login'),
		'https://corsproxy.io/?' + encodeURIComponent('http://cetlms.hcdc.edu.ph/')
	];

	let urls: string[] = [
		'https://hcdc.edu.ph/',
		'http://studentportal.hcdc.edu.ph/login',
		'http://cetlms.hcdc.edu.ph/'
	];

	let website: string[] = [
		'www.hcdc.edu.ph',
		'www.studentportal.hcdc.edu.ph',
		'www.cetlms.hcdc.edu.ph/'
	];

	let websiteText: string[] = [
		'The official website of The Holy Cross of Davao College',
		'The official student portal of The Holy Cross of Davao College',
		'The Official Learning Management System (LMS) of The Holy Cross of Davao College - College of Engineering and Technology'
	];

	let statuses: string[] = Array(proxy_urls.length).fill('Checking...');
	let lastCheckTime: string = '';

	let allSystemsOperational = true;

	async function checkStatus() {
		const currentTime: string = new Date().toLocaleTimeString();
		const currentDate: string = new Date().toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			weekday: 'long'
		});
		lastCheckTime = `Last Checked: ${currentDate} ${currentTime}`;

		for (let i = 0; i < proxy_urls.length; i++) {
			try {
				const response: Response = await fetch(proxy_urls[i]);
				statuses[i] = response.ok ? 'Online' : 'Experiencing Issues';
			} catch (error) {
				statuses[i] = 'Error';
			}
			console.log(`${urls[i]}: ${statuses[i]}`);
		}

		// Store the statuses in local storage
		// localStorage.setItem('statuses', JSON.stringify(statuses));

		// Check if all systems are operational
		allSystemsOperational = statuses.every((status) => status === 'Online');
	}

	// Check status on component mount
	onMount(() => {
		// Retrieve statuses from local storage
		// const storedStatuses = localStorage.getItem('statuses');
		// if (storedStatuses) {
		// 	statuses = JSON.parse(storedStatuses);
		// }

		checkStatus();
	});

	// Check status every hour
	const interval: NodeJS.Timeout = setInterval(checkStatus, 60 * 60 * 1000);

	onDestroy(() => clearInterval(interval));

	// export let data: PageData; // check server side

	// console.log(data); // check server side
</script>

<main class="pt-4 flex flex-col items-center justify-center">
	<!-- Alert message -->
	{#if allSystemsOperational}
		<div
			class="w-[70%] border flex items-center p-4 mb-4 text-xl text-green-800 rounded-lg bg-green-800 dark:bg-gray-800 dark:text-green-400"
			role="alert"
		>
			<svg
				class="flex-shrink-0 inline w-6 h-6 mr-3 text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
				/>
			</svg>

			<span class="sr-only">Info</span>
			<div class="font-medium text-white">
				<span class="font-medium text-white">All Systems Operational!</span> No reported issues.
			</div>
		</div>
	{:else}
		<div
			class="w-[70%] flex items-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-800 dark:bg-red-800 dark:text-red-400"
			role="alert"
		>
			<svg
				class="flex-shrink-0 inline w-6 h-6 mr-3 text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M10 1a9 9 0 0 0-9 9 9 9 0 0 0 18 0 9 9 0 0 0-9-9ZM9 14H11V16H9zM9 6H11V12H9Z" />
			</svg>
			<span class="sr-only">Error</span>
			<div class="font-medium text-white">
				<span class="font-medium text-white">Some site/s experiencing issues!</span> Check individual
				status for more details.
			</div>
		</div>
	{/if}
	<!-- <StatusCard operationalText="Experiencing Issues" />
	<StatusCard operationalText="dasd" /> -->
	{#each statuses as status, i}
		<StatusCard
			operationalText={status}
			url={urls[i]}
			officialText={websiteText[i]}
			websiteText={website[i]}
		/>
	{/each}

	<!-- ... (your existing code) ... -->
	<h1 class="text-4xl font-bold pt-20 pb-8">Frequently Asked Questions (FAQ)</h1>
	<FAQ />
</main>

<style>
	h1 {
		font-family: 'Avenir LT Std Black';
	}
	span {
		font-family: 'Avenir LT Std Roman';
	}
</style>
