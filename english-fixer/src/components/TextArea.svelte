<script>
  import { checkEnglish } from "../services/ai";
  import { isValidInput } from "./Store";

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

<label>
  <textarea
    on:input={handleChange}
    class="flex-1 min-w-[400px] px-4 py-4 mt-6 text-base text-gray-700 font-extralight placeholder:text-gray-300 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    placeholder="Enter your english phrase."
    name="comment"
    id="result"
    rows="6"
    cols="40"
  />
</label>
