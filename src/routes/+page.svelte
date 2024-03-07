<script lang="ts">
	import { _, locale } from 'svelte-i18n'

	import { Search } from 'lucide-svelte'
	import FactCard from '../components/FactCard.svelte'
	import { cards } from '../content/cards'

	type Card = { content: { [key: string]: string }, color: number }

	const initialCards: Card[] = cards.map(card => ({ ...card, color: Math.floor(Math.random() * 3) }))
	let searchTerm = ''
	let filteredCards: Card[] = initialCards

	$: language = String($locale)

	function filterCards() {
		filteredCards = initialCards.filter(card => {
    		const validLanguage = language as keyof typeof card.content
			const content = card.content[validLanguage]
			if (content) {
				return content.toLowerCase().includes(searchTerm.toLowerCase())
			}
			return false
		})
	}

	
    $: {
        filterCards()
		filteredCards
    }
</script>

<svelte:head>
	<title>Fatonhos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-10 items-center">
	<section class="flex flex-col gap-2 w-full max-w-[600px]">
		<form class="relative" on:submit|preventDefault>
			<input 
				class="border-b-[1px] border-custom-gray p-4 bg-transparent pr-14 w-full text-custom-gray"
				type="text" 
				bind:value={searchTerm} 
				placeholder={$_('main.search')}
				autocomplete="off"
				on:input={filterCards}
			/>

			<Search class="absolute right-4 top-1/2 -translate-y-1/2 text-custom-gray pointer-events-none" />
		</form>

		<p class="text-end text-custom-gray">
			{@html ($_('main.facts', { values: { count: filteredCards.length, total: cards.length }}))}
		</p>
	</section>	
  
	{#if filteredCards.length === 0}
		<section class="py-64">
			<p class="text-[3vw] dark:text-custom-white">
				{$_('main.empty')}
			</p>
		</section>
	{:else}
		<section class="grid grid-cols-[repeat(auto-fill,300px)] w-full justify-center gap-x-4 gap-y-8">
			{#each filteredCards as card, index}
				<FactCard content={card.content[language]} color={card.color} number={index + 1} />
			{/each}
		</section>
	{/if}
</div>