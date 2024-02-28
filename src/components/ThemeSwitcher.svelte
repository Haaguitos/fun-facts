<script lang="ts">
    import { Moon, Sun } from "lucide-svelte";
    import { onDestroy } from "svelte";

    let colorMode = "light";

    const setColorMode = (mode: string) => {
        colorMode = mode;
    };

    // Adicionar/remover a classe dark/light ao document.body
    $: {
        if (colorMode === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    // Remove o observador quando o componente for destruído
    onDestroy(() => {
        document.body.classList.remove("dark");
    });
</script>

<button
    on:click={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    class="group flex w-12 h-12 items-center justify-center rounded-2xl"
>
    <Sun class="rotate-0 scale-100 transition-all fill-white dark:-rotate-90 dark:scale-0 group-hover:fill-primary-100" />
    <Moon class="absolute rotate-90 scale-0 transition-all fill-primary-200 dark:rotate-0 dark:scale-100 group-hover:fill-primary-100" />
</button>
