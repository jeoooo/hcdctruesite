<script>
	import { Accordion, AccordionItem, Card } from 'flowbite-svelte';
	import Link from './Link.svelte';
</script>

<Accordion
	class="w-[80%] 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800'"
	multiple
>
	<AccordionItem open>
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
			<span class="text-gray-900">What is HCDC True Site?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			HCDC True Site is an "unofficial", third-party, open-source project that serves as a Uptime
			Status Checker for official Holy Cross of Davao College (HCDC) websites.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			It regularly monitors the availability and status of key HCDC websites, providing users with
			real-time information about their operational status.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			The following websites are officially being monitored availability and status:
		</p>
		<ul class="max-w-l space-y-1 text-black list-disc list-inside indent-10">
			<li>
				<Link href="https://hcdc.edu.ph/">hcdc.edu.ph</Link> - The official website of The Holy Cross
				of Davao College
			</li>
			<li>
				<Link href="http://studentportal.hcdc.edu.ph/login">studentportal.hcdc.edu.ph</Link> - The official
				student portal of The Holy Cross of Davao College
			</li>
			<li>
				<Link href="http://cetlms.hcdc.edu.ph/">cetlms.hcdc.edu.ph</Link> - The official Learning Management
				System (LMS) of The Holy Cross of Davao College - College of Engineering and Technology
			</li>
		</ul>
	</AccordionItem>
	<AccordionItem open>
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
			<span class="text-gray-900">Why create this project?</span>
		</span>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This project was developed with the primary goal of assisting the HCDC community by providing
			real-time insights into the operational status of key HCDC websites. The aim is to empower
			users with immediate information on whether these essential platforms are accessible or
			encountering issues. By offering a simple and quick overview, HCDC True Site contributes to a
			seamless online experience for the HCDC community, ensuring they stay informed and connected.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This project reflects a commitment to enhancing accessibility and transparency for the benefit
			of the HCDC community.
		</p>
	</AccordionItem>

	<AccordionItem open>
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
			The Uptime Status Checker conducts routine checks by leveraging
			<a
				class="text-blue-600 hover:underline"
				href="https://www.fortinet.com/resources/cyberglossary/proxy-server#:~:text=A%20proxy%20server%20is%20a,web%20pages%20they%20visit%20online."
				target="_blank">proxy servers</a
			> to simulate user interactions from various locations, ensuring a comprehensive evaluation of
			HCDC websites' responsiveness and identification of regional issues. It not only monitors online/offline
			status but also provides valuable insights into overall website health, detecting instances of
			unresponsiveness.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			This proactive approach facilitates issue resolution, making the tool crucial for maintaining
			the reliability and accessibility of HCDC websites. The tool's fundamental function involves
			sending HTTP requests and categorizing websites as online or offline based on successful
			responses, emphasizing its simplicity and immediate utility in assessing website availability.
		</p>
	</AccordionItem>
	<AccordionItem open>
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
				>How can I contribute new features or report issues with the site tracker?</span
			>
		</span>

		<p class="mb-2 text-gray-900 dark:text-gray-400">
			If you have suggestions for new features or encounter issues with the site tracker, we welcome
			your input! Please contact the developer via email or share your suggestions and report issues
			by filling out this <Link href="https://forms.gle/HR3FmfhAPryF3RPdA">Google Form</Link>.
		</p>
		<p class="mb-2 text-gray-900 dark:text-gray-400">
			Additionally, you can create Github Issues in the
			<Link href="https://github.com/jeoooo/hcdcuptimetracker">project repository</Link>
			for tracking and resolution.
		</p>
	</AccordionItem>
</Accordion>

<style>
	span {
		font-family: 'Avenir LT Std Black';
	}

	p {
		font-family: 'Avenir LT Std Roman';
	}
	li {
		font-family: 'Avenir LT Std Roman';
	}
</style>
