import { onDestroy } from 'svelte';
import type { PageServerLoad } from './$types';

let proxy_urls: string[] = [
	'https://corsproxy.io/?' + encodeURIComponent('https://www.hcdc.edu.ph/'),
	'https://corsproxy.io/?' + encodeURIComponent('https://studentportal.hcdc.edu.ph/login'),
	'https://corsproxy.io/?' + encodeURIComponent('http://cetlms.hcdc.edu.ph/')
];

let urls: string[] = [
	'https://hcdc.edu.ph/',
	'https://studentportal.hcdc.edu.ph/login',
	'http://cetlms.hcdc.edu.ph/'
];

let statuses: string[] = Array(proxy_urls.length).fill('Checking...');
let lastCheckTime: string = '';

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
			statuses[i] = response.ok ? 'Online' : 'Offline';
		} catch (error) {
			statuses[i] = 'Error';
		}
		console.log(`${urls[i]}: ${statuses[i]}`);
	}
}

// Check status on component mount
checkStatus();

// Check status every hour
const interval: NodeJS.Timeout = setInterval(checkStatus, 60 * 60 * 1000);

export const load: PageServerLoad = async () => {
	return {
		'http://hcdc.edu.ph': statuses[0],
		'http://studentportal.hcdc.edu.ph': statuses[1],
		'http://cetlms.hcdc.edu.ph/': statuses[2]
	};
};
