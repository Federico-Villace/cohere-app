<script>
  import { fixMyEnglish } from "../services/ai";
  import Loading from "./icons/Loading.svelte";
  import { isValidInput } from "./Store.js";

  let promise = null;

  const handleClick = async () => {
    const text = document.getElementById("result").value;
    promise = fixMyEnglish(text);
    const value = await promise;
    document.getElementById("result").value = value;
    promise = null;
  };

  export const text = "test with text";
</script>

{#if promise === null}
  <button
    on:click={handleClick}
    disabled={!$isValidInput}
    type="button"
    class={`py-2 px-4 bg-red-600 hover:bg-red-700 max-w-[100px] focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer rounded-lg ${
      !$isValidInput ? "pointer-events-none opacity-50" : ""
    }`}
  >
    Fix it!
  </button>
{:else}
  {#await promise}
    <button
      type="button"
      class="pointers-event-none py-2 px-4 flex justify-center items-center max-w-[100px] bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      <Loading />
      loading
    </button>
  {/await}
{/if}
