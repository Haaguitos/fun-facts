<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    let isDarkMode = false;

    onMount(() => {
        if (browser) {
            isDarkMode = document.body.classList.contains("dark");
            const observer = new MutationObserver(() => {
                isDarkMode = document.body.classList.contains("dark");
            });
            observer.observe(document.body, { attributes: true });
        }
    });

    const lightColors = ["#FFDE53", "#4EC5D4", "#FEC6FF"];
    const darkColors = ["#AD8B00", "#2A5B54", "#831A56"];

    $: colors = isDarkMode ? darkColors : lightColors;

    $: randomColor = colors[Math.floor(Math.random() * colors.length)];

    export let content: string;
</script>
  
<div 
    class="flex flex-col justify-between size-[300px] p-4 rotate-[-4deg] dark:text-custom-white"
    style="background-color: {randomColor}"
>
    <p class="text-2xl">
        {content}
    </p>

    <p class="font-heading text-2xl text-end">
        #1
    </p>
</div>
