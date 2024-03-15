<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-10 items-start max-w-prose mx-auto pt-10 dark:text-custom-white">
    <h1 class="text-4xl font-bold">
		{$_('about.title')}
	</h1>

	<p class="text-2xl font-bold">{$_('about.whatQuestion')}<span class="font-heading text-3xl">{" "}fatonhos</span>?</p>
	<p class="text-2xl">
		{$_('about.whatAnswer')}
	</p>

	<p class="text-2xl font-bold">
		{$_('about.veracityQuestion')}
	</p>
	<p class="text-2xl">
		{$_('about.veracityAnswer')}
	</p>

	<p class="text-2xl font-bold">
		{$_('about.techsQuestion')}
	</p>	
	<p class="inline-table text-2xl">
		{$_('about.techsAnswerStart')}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://svelte.dev/"
		  class="underline"
        >
          	Svelte
		</a>
		{$_('about.techsAnswerMiddle')}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://tailwindcss.com/"
		  class="underline"
        >
          	tailwind
        </a>
		{$_('about.techsAnswerEnd')}
	</p>
</div>