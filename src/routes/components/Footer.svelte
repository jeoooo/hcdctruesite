<script>
	// @ts-nocheck

	import { Tooltip, Button, P } from 'flowbite-svelte';
	let placement = 'left';
</script>

<div class="rectangle7 mt-8" />
<div class="rectangle6" />
<div class="rectangle5" />
<footer class="footer bg-[#053772]">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="tracker-text text-base text-white">
			<a href="/" class="hover:underline">HCDC Site Status </a>
			|
			<p class="text-xs">made by @jeooo 🎉</p>
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<li>
				<a href="https://github.com/jeoooo/hcdcuptimetracker" target="_blank">
					<svg
						class="w-6 h-6 mr-6 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
						id="github"
					>
						<path
							fill-rule="evenodd"
							d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
							clip-rule="evenodd"
						/>
					</svg></a
				>
			</li>

			<Tooltip triggeredBy="#github" on:show={(e) => ([, placement] = e.target.id.split('-'))}>
				Github Repo
			</Tooltip>
			<li>
				<a href="/faq">
					<svg
						class="w-6 h-6 mr-6 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
						id="faq"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
						/>
					</svg>
				</a>
			</li>
			<Tooltip triggeredBy="#faq" on:show={(e) => ([, placement] = e.target.id.split('-'))}>
				FAQ
			</Tooltip>
			<li>
				<a
					href="mailto:jeocarlolubao@gmail.com?cc=jeooocarlo@gmail.com&subject=HCDC%20Site%20Status%20Email%20Notification"
				>
					<svg
						class="w-6 h-6 mr-6 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 16"
						id="emailme"
					>
						<path
							d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
						/>
						<path
							d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
						/>
					</svg></a
				>
			</li>
			<Tooltip triggeredBy="#emailme" on:show={(e) => ([, placement] = e.target.id.split('-'))}>
				<p>Email Me :D</p>
			</Tooltip>

			<!-- <li>
				<a href="#" class="mr-4 hover:underline md:mr-6 text-white">Privacy Policy</a>
			</li> -->

			<li>
				<a
					href="https://forms.gle/HR3FmfhAPryF3RPdA"
					target="_blank"
					class="hover:underline text-white"
				>
					<svg
						class="w-6 h-6 mr-6 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 19 20"
						id="bug"
					>
						<path
							d="M16.025 15H14.91c.058-.33.088-.665.09-1v-1h2a1 1 0 0 0 0-2h-2.09a5.97 5.97 0 0 0-.26-1h.375a2 2 0 0 0 2-2V6a1 1 0 0 0-2 0v2H13.46a6.239 6.239 0 0 0-.46-.46V6a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 13 2V1a1 1 0 0 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L7 1.586V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 5 6v1.54a6.239 6.239 0 0 0-.46.46H3V6a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h.35a5.97 5.97 0 0 0-.26 1H1a1 1 0 0 0 0 2h2v1a6 6 0 0 0 .09 1H2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h1.812A6.012 6.012 0 0 0 8 19.907V10a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 14.188 17h1.837v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2ZM11 6.35a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.924 5.924 0 0 0 7 6.35V6a2 2 0 1 1 4 0v.35Z"
						/>
					</svg>
				</a>
			</li>
			<Tooltip triggeredBy="#bug" on:show={(e) => ([, placement] = e.target.id.split('-'))}>
				Bug
			</Tooltip>
		</ul>
	</div>
</footer>

<style>
	.rectangle5 {
		width: 100%;
		height: calc(125px / 1.618);
		top: 0;
		left: 0;
		background-color: #024a9e;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rectangle6 {
		width: 100%;
		height: calc(calc(125px / 1.618) / 1.618);
		top: 0;
		left: 0;
		background-color: #0469dd;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rectangle7 {
		width: 100%;
		height: calc(calc(calc(125px / 1.618) / 1.618) / 1.618);
		top: 0;
		left: 0;
		background-color: #0377fe;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main_text {
		font-family: 'Avenir LT Std Roman';
	}

	.tracker-text {
		font-family: 'Avenir LT Std Black';
		display: inline; /* Ensures it's displayed inline with the rest of the text */
	}
	a {
		font-family: 'Avenir LT Std Black';
		display: inline; /* Ensures it's displayed inline with the rest of the text */
	}
	p {
		font-family: 'Avenir LT Std Roman';
		display: inline; /* Ensures it's displayed inline with the rest of the text */
	}
</style>
