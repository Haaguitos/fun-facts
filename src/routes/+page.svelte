<script>
	// import { cards } from './cards.js';

	import { Search } from "lucide-svelte";
	import FactCard from "../components/FactCard.svelte";

  
	let searchTerm = '';
  
	// function filterCards() {
	//   return cards.filter(card => {
	// 	return card.title.toLowerCase().includes(searchTerm.toLowerCase());
	//   });
	// }
  
	// $: filteredCards = filterCards();
</script>

<svelte:head>
	<title>Home</title>
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
			/>

			<Search class="absolute right-4 top-1/2 -translate-y-1/2 text-custom-gray" />
		</form>

		<p class="text-end text-custom-gray"><b>8</b> of <b>bizentos</b> facts</p>
	</section>	
  
	<section class="grid grid-cols-[repeat(auto-fill,300px)] w-full justify-center gap-x-4 gap-y-8">
		<FactCard />
		<FactCard />
		<FactCard />
		<FactCard />
		<FactCard />
		<FactCard />
		<FactCard />
	</section>
</div>