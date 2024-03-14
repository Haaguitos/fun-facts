<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-10 items-start max-w-prose mx-auto py-10 dark:text-custom-white">
    <h1 class="text-4xl font-bold">
		{$_('about.title')}
	</h1>

	<p class="text-2xl font-bold">{$_('about.what')}<span class="font-heading text-3xl">fatonhos</span>?</p>
	<p class="text-2xl">
		Lorem ipsum dolor sit amet. Est amet incidunt et voluptatem sunt sed Quis eaque. Aut quia praesentium non voluptate ipsam ut dolore maiores.
		Non dolor enim ut pariatur quis eum ipsum rerum id autem necessitatibus ea molestiae beatae qui delectus numquam? 
	</p>

	<p class="text-2xl font-bold">
		{$_('about.truth')}
	</p>
	<p class="text-2xl">
		Et aliquid quidem ut doloremque veniam quo laudantium quas cum voluptas culpa quo odio asperiores et sapiente rerum. 
	</p>

	<p class="text-2xl font-bold">
		{$_('about.techs')}
	</p>	
	<p class="text-2xl">
		Id saepe accusamus qui veritatis necessitatibus vel sunt galisum eum provident omnis ea eveniet voluptate aut minima iste a officia repudiandae? Et nisi aspernatur quo amet natus et laudantium quia? 
	</p>
</div>