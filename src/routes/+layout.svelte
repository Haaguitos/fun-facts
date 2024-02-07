<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
</script>

<div class="flex flex-col min-h-screen max-w-[90rem] mx-auto">
	<Header />
	<main>
		<slot />
	</main>
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
