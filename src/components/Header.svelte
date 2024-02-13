<script lang="ts">
    import {_, locale} from 'svelte-i18n';
    import { Languages } from 'lucide-svelte'

    let value: string = 'en';

    const handleLocaleChange = (event: any) => {
        event.preventDefault();
        const value = event?.target?.value;
        $locale = value;
    }
</script>
  
<header class="flex justify-between py-4 px-5 items-center">
    <a href={'/'} class='font-heading text-2xl font-bold'>
        fatonhos
    </a>

    <div class="flex flex-row gap-4">
        <a href={'/about'}>
            about
        </a>

        <button>
            <Languages />
        </button>

        <div>
            <select {value} on:change={handleLocaleChange}>
                <option value="en" selected>{$_('locale-switch.lang.en')}</option>
                <option value="pt-BR">{$_('locale-switch.lang.br')}</option>
            </select>
        </div>
    </div>
</header>