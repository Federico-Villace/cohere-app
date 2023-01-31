import cohere from "cohere-ai";
import ora from "ora";

const spinner = ora("generating questions").start();

cohere.init("DDDvR4315GURC6C33KnG5ZdBpT6xt0zisDDJC9wk");

const response = await cohere.generate({
  model: "command-xlarge-20221108",
  prompt:
    "generate five questions for an interview of an Senior Frontend Engineer",
  max_tokens: 100,
  temperature: 1.2,
  k: 0,
  p: 1,
  frequency_penalty: 1,
  presence_penalty: 1,
  stop_sequences: [],
  return_likelihoods: "NONE",
});
spinner.succeed("Done!");
const { generations } = response.body;
console.log(generations[0].text);
