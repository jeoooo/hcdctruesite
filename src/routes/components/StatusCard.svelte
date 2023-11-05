<script>
	export let url = 'https://www.example.com/';
	export let websiteText = 'www.example.com';
	export let officialText = 'Card Description';
	export let operationalText = 'undefined';
</script>

{#if operationalText == 'Online'}
	<div
		class="flex flex-col component h-auto w-[75%] shadow-md bg-green-50 min-w-[300px] md:w-[700px] lg:w-[1000px]"
		aria-label={`Status: Online - ${websiteText}`}
	>
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-green-800 dark:text-[#053772] hover:underline"
		>
			<h3 class="text-[16px] md:text-[24px] lg:text-[32px]">
				{websiteText}
			</h3>
		</a>
		<div class="flex flex-row">
			<span
				class="ml-3 mt-1 w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				<div class="flex flex-row">
					Verified
					<svg
						class="w-3 h-auto ml-1 text-blue-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
						/>
						<path
							fill="#fff"
							d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
						/>
					</svg>
				</div>
			</span>
			<span
				class="ml-1 mt-1 w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				Online
			</span>
		</div>

		<p class=" text-[10px] md:text-[12px] lg:text-[14px] p-3">{officialText}</p>
	</div>
{:else if operationalText == 'Experiencing Issues'}
	<div
		class="flex flex-col component h-auto w-[75%] shadow-md bg-red-50 min-w-[300px] md:w-[700px] lg:w-[1000px]"
		aria-label={`Status: Online - ${websiteText}`}
	>
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-red-800 dark:text-[#053772] hover:underline"
		>
			<h3 class="text-[16px] md:text-[24px] lg:text-[32px]">
				{websiteText}
			</h3>
		</a>
		<div class="flex flex-row">
			<span
				class="ml-3 mt-1 w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				<div class="flex flex-row">
					Verified
					<svg
						class="w-3 h-auto ml-1 text-blue-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
						/>
						<path
							fill="#fff"
							d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
						/>
					</svg>
				</div>
			</span>
			<span
				class="ml-1 mt-1 w-fit bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				Experiencing Issues
			</span>
		</div>

		<p class=" text-[10px] md:text-[12px] lg:text-[14px] p-3">{officialText}</p>
	</div>
{:else}
	<!-- ? LOADING  -->
	<div
		class="flex flex-col component h-auto w-[75%] shadow-md bg-yellow-50 min-w-[300px] md:w-[700px] lg:w-[1000px]"
		aria-label={`Status: Online - ${websiteText}`}
	>
		<a
			href={url}
			target="_blank"
			class="mb-2 text-3xl ml-4 mt-4 inline-flex items-center font-bold text-yellow-800 dark:text-[#053772] hover:underline"
		>
			<h3 class="text-[16px] md:text-[24px] lg:text-[32px]">
				{websiteText}
			</h3>
		</a>
		<div class="flex flex-row">
			<span
				class="ml-3 mt-1 w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				<div class="flex flex-row">
					Verified
					<svg
						class="w-3 h-auto ml-1 text-blue-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
						/>
						<path
							fill="#fff"
							d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
						/>
					</svg>
				</div>
			</span>
			<span
				class="ml-1 mt-1 w-fit bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
			>
				Loading
			</span>
		</div>

		<p class=" text-[10px] md:text-[12px] lg:text-[14px] p-3">{officialText}</p>
	</div>
{/if}

<style>
	.component {
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
