<script>
  import { checkEnglish } from "../services/ai";
  import { isValidInput } from "./Store";
  import ButtonSubmit from "./ButtonSubmit.svelte";
  import { onMount } from "svelte";

  let componentButton;

  onMount(() => {
    console.log(componentButton.text);
  });

  const handleChange = async (e) => {
    const { value } = e.target;
    const isValid = value.length > 0;
    if (!isValid) {
      isValidInput.set(false);
      return;
    }
    const isEnglish = await checkEnglish(value);
    isValidInput.set(isEnglish);
  };
</script>

<div>
  <label>
    <textarea
      on:input={handleChange}
      class="flex-1 lg:min-w-[400px] md:min-w-[200px] px-4 py-4 mt-6 text-base text-gray-700 font-extralight placeholder:text-gray-300 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder="Enter your english phrase."
      name="comment"
      id="result"
      rows="3"
      cols="30"
    />
  </label>
  <div class="flex flex-col items-center">
    <ButtonSubmit bind:this={componentButton} />
  </div>
</div>
