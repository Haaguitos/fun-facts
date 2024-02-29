<script lang="ts">
    import { Moon, Sun } from "lucide-svelte";
    import { onDestroy, onMount } from "svelte";
    import { browser } from '$app/environment';

    let colorMode = "light";

    const setColorMode = (mode: string) => {
        colorMode = mode;
        if (browser) {
            if (colorMode === "dark") {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        }
    };

    if (browser) {
        onMount(() => {
            if (colorMode === "dark") {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        });
    }

    onDestroy(() => {
        if (browser) {
            document.body.classList.remove("dark");
        }
    });
</script>

<button
    on:click={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    class="group flex w-12 h-12 items-center justify-center rounded-2xl"
>
    <Sun class="rotate-0 scale-100 transition-all fill-white dark:-rotate-90 dark:scale-0 group-hover:fill-primary-100" />
    <Moon class="absolute rotate-90 scale-0 transition-all fill-primary-200 dark:rotate-0 dark:scale-100 group-hover:fill-primary-100" />
</button>
