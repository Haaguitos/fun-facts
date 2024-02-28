<script lang="ts">
    import {_, locale} from 'svelte-i18n'
    import { Languages } from 'lucide-svelte'
	import ThemeSwitcher from './ThemeSwitcher.svelte';

    let value: string = 'en-US'

    const handleLocaleChange = (event: Event) => {
        event.preventDefault();
        const newLocale = (event.target as HTMLSelectElement).value
        locale.set(newLocale)
    }
</script>
  
<header class="flex justify-between py-4 px-5 items-center">
    <a href={'/'} class='font-heading text-2xl font-bold'>
        fatonhos
    </a>

    <div class="flex flex-row items-center gap-4">
        <a href={'/about'}>
            about
        </a>

        <button>
            <Languages />
        </button>

        <ThemeSwitcher />

        <div>
            <select {value} on:change={handleLocaleChange}>
                <option value="en-US" selected>en</option>
                <option value="pt-BR">pt-BR</option>
            </select>
        </div>
    </div>
</header>