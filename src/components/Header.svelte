<script lang="ts">
    import {_, locale} from 'svelte-i18n'
    import { Languages } from 'lucide-svelte'
    import ThemeSwitcher from './ThemeSwitcher.svelte'
    import { isLocaleLoaded } from "$lib/i18n"
    
    let value: string = 'en-US'

    $: language = String($locale)
    $: value = language

    const handleLocaleChange = (event: Event) => {
        event.preventDefault();
        const newLocale = (event.target as HTMLSelectElement).value
        locale.set(newLocale)
    }
</script>
  
<header class="flex justify-between py-4 px-5 items-center dark:text-custom-white">
    <a href={'/'} class='font-heading text-2xl font-bold '>
        fatonhos
    </a>

    <div class="flex flex-row items-center gap-4">
        <a href={'/about'}>
            {$_('main.about')}
        </a>

        <button>
            <Languages />
        </button>

        <ThemeSwitcher />

        
		{#if $isLocaleLoaded}
            <div>
                <select
                    bind:value 
                    on:change={handleLocaleChange}
                    class="bg-transparent dark:text-custom-white"
                >
                    <option value="en-US">en</option>
                    <option value="pt-BR">pt-BR</option>
                </select>
            </div>
        {/if}
    </div>
</header>
