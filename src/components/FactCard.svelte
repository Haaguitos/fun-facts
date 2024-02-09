<script lang="ts">
    interface CardProps {
        content: string;
    }

    const colors = ["#FFDE53", "#4EC5D4", "#FEC6FF"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    export let card: CardProps
</script>
  
<div 
    class="flex flex-col justify-between size-[300px] p-4 rotate-[-4deg]"
    style="background-color: {randomColor}"
>
    <p class="text-2xl">
        {card.content}
    </p>

    <p class="font-heading text-2xl text-end">
        #1
    </p>
</div>
