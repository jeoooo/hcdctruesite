<script lang="ts">
	export let href: string = 'https://example.com/';
	export let text = ''; // Optional fallback text
</script>

<a class="text-blue-600 hover:underline" {href} target="_blank">
	{#if text}
		{text}
	{:else}
		<slot><!-- optional fallback --></slot>
	{/if}
</a>
