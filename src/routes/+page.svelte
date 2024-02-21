<script lang="ts">
	import { Search } from "lucide-svelte"
	import FactCard from "../components/FactCard.svelte"
	import { cards } from "../content/cards"

	let searchTerm = ''
	let filteredCards: {content: string }[] = cards
	
	function filterCards() {
	  filteredCards = cards.filter(card => {
		return card.content.toLowerCase().includes(searchTerm.toLowerCase())
	  })
	}
</script>

<svelte:head>
	<title>Fatonhos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-10 items-center">
	<section class="flex flex-col gap-2 w-full max-w-[600px]">
		<form class="relative">
			<input 
				class="border-b-[1px] border-custom-gray p-4 pr-14 w-full text-custom-gray"
				type="text" 
				bind:value={searchTerm} 
				placeholder="search for a fact!" 
				autocomplete="off"
				on:input={filterCards}
			/>

			<Search class="absolute right-4 top-1/2 -translate-y-1/2 text-custom-gray pointer-events-none" />
		</form>

		<p class="text-end text-custom-gray"><b>{filteredCards.length}</b> of <b>{cards.length}</b> facts</p>
	</section>	
  
	{#if filteredCards.length === 0}
		<section class="py-64">
			<p class="text-[3vw]">
				No results! :(
			</p>
		</section>
	{:else}
		<section class="grid grid-cols-[repeat(auto-fill,300px)] w-full justify-center gap-x-4 gap-y-8">
			{#each filteredCards as card}
				<FactCard {card} />
			{/each}
		</section>
	{/if}
</div>