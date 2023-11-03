<script>
	import { Accordion, AccordionItem, Card } from 'flowbite-svelte';
</script>

<Accordion
	class="w-[70%] 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800'"
	multiple
>
	<AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900">Why did you create this project?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This project was developed with the primary goal of assisting the HCDC community by providing
			real-time insights into the operational status of key HCDC websites.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			The aim is to empower users with immediate information on whether these essential platforms
			are accessible or encountering issues.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			By offering a simple and quick overview, the Uptime Status Checker contributes to a seamless
			online experience for the HCDC community, ensuring they stay informed and connected.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This project reflects a commitment to enhancing accessibility and transparency for the benefit
			of the HCDC community.
		</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900">What is the purpose of this website?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This third-party, open-source project serves as a Uptime Status Checker for official Holy
			Cross of Davao College (HCDC) websites. It regularly monitors the availability and status of
			key HCDC websites, providing users with real-time information about their operational status
			in an hourly basis.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			It regularly monitors the availability and status of key HCDC websites, providing users with
			real-time information about their operational status in an hourly basis.
		</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900">How does it work?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			The Uptime Status Checker operates by routinely inspecting the status of HCDC websites using
			proxy servers to prevent any disruption.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			Through simulated user interactions, it sends HTTP requests to the websites, assessing their
			responsiveness. If a website responds successfully, it is deemed online; otherwise, it is
			considered offline or experiencing issues.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			If a website responds successfully, it is deemed online; otherwise, it is considered offline
			or experiencing issues.
		</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900"
				>I have some suggestions for new features. How can I contribute?</span
			>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			Feel free to contact the developer via email or share your suggestions by filling out this
			Google Form
		</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900">The site tracker has issues, how do I report them?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			To report issues with the site tracker, you may create a GitHub issue in the project
			repository or contact the developer via email.
		</p>
	</AccordionItem>
	<!-- <AccordionItem>
		<span slot="header" class="text-lg font-bold flex gap-2">
			<svg
				class="w-6 h-6 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
				/>
			</svg>
			<span class="text-gray-900">What is the tech stack used for this project?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			The project is built using Svelte and SvelteKit, with additional styling provided by Tailwind
			CSS and the Flowbite framework.
		</p>
	</AccordionItem> -->
</Accordion>

<style>
	/* span {
		font-family: 'Avenir LT Std Black';
	} */
	p {
		font-family: 'Avenir LT Std Roman';
	}
</style>
