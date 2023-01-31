import cohere from "cohere-ai";

cohere.init("DDDvR4315GURC6C33KnG5ZdBpT6xt0zisDDJC9wk"); // This is your trial API key

const response = await cohere.generate({
  model: "command-xlarge-20221108",
  prompt:
    "Generate an intro paragraph of a blog post geared towards athletes who are looking to learn how to rock climb. The post should be enthusiastic and speak to people who are inactive and nervous.",
  max_tokens: 300,
  temperature: 0.9,
  k: 0,
  p: 0.75,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: [],
  return_likelihoods: "NONE",
});
console.log(`Prediction: ${response.body.generations[0].text}`);
