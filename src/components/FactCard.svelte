<script lang="ts">  
	import { locale } from 'svelte-i18n'
    interface CardProps { 
        content: {
            [key: string]: string 
        }
    }    

    const colors = ["#FFDE53", "#4EC5D4", "#FEC6FF"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    // Definir $language como uma chave válida em card.content
    const validLanguage = $locale as keyof typeof card.content;

    export let card: CardProps
</script>
  
<div 
    class="flex flex-col justify-between size-[300px] p-4 rotate-[-4deg]"
    style="background-color: {randomColor}"
>
    <p class="text-2xl">
        {card.content[validLanguage]}
    </p>

    <p class="font-heading text-2xl text-end">
        #1
    </p>
</div>
