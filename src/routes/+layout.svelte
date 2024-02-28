<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import { isLocaleLoaded } from "$lib/i18n";
</script>

<div class="dark:bg-custom-gray">
	<div class="flex flex-col min-h-screen max-w-[90rem] mx-auto">
		<Header />
		<main>
			{#if $isLocaleLoaded}
				<slot />
			{:else}
				<div>Loading...</div>
			{/if}
		</main>
		<Footer />			
	</div>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
