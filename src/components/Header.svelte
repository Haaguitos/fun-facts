<script lang="ts">
    import { Languages } from 'lucide-svelte'
</script>
  
<header class="flex justify-between py-4 px-5 items-center">
    <a href={'/'} class='font-heading text-2xl font-bold'>
        fatonhos
    </a>

    <div class="flex flex-row gap-4">
        <a href={'/about'}>
            about
        </a>

        <Languages />
    </div>
</header>