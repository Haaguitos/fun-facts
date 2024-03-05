<script lang="ts">
    import { browser } from '$app/environment'
    import { onMount } from 'svelte'

    let isDarkMode = false

    onMount(() => {
        if (browser) {
            isDarkMode = document.body.classList.contains("dark");
            const observer = new MutationObserver(() => {
                isDarkMode = document.body.classList.contains("dark");
            });
            observer.observe(document.body, { attributes: true })
        }
    })

    const lightColors = ["#FFDE53", "#4EC5D4", "#FEC6FF"]
    const darkColors = ["#AD8B00", "#2A5B54", "#831A56"]

    $: colors = isDarkMode ? darkColors : lightColors

    export let content: string
    export let color: number
    export let number: number
</script>
  
<div 
    class="flex flex-col justify-between size-[300px] p-4 rotate-[-4deg] dark:text-custom-white"
    style="background-color: {colors[color]}"
>
    <p class="text-2xl">
        {content}
    </p>

    <p class="font-heading text-2xl text-end">
        #{number}
    </p>
</div>
