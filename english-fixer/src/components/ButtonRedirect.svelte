<script>
import { onMount } from "svelte";

let componentButton;

onMount(() => {
    console.log(componentButton.text);
  });


</script>

<a href="/app" class="mt-[20px] text-white hover:text-slate-200 action:text-slate-300 text-center border-solid border-white" bind:this={componentButton}> 
    Go to the App 
</a>