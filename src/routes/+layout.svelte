<script>
	import "../app.css"
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
	import { isLocaleLoaded } from "$lib/i18n"
</script>

<div class="bg-white dark:bg-bg-gray transition-all">
	<div class="flex flex-col min-h-screen max-w-[90rem] mx-auto">
			{#if $isLocaleLoaded}
				<Header />
				<main>
					<slot />
				</main>
			{:else}
				<div>Loading...</div>
			{/if}
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
