import cohere from 'cohere-ai'

export const fixMyEnglish = async (input) => {

    const response = await cohere.generate({
        model: "command-xlarge",
        prompt:
          `This is a spell checker generator. 
          -- 
          Incorrect sample: "I are good"
          Correct sample: "I am good"
          -- 
          Incorrect sample: "You have ten years old"
          Correct sample: "I are ten years old"
          -- 
          Incorrect sample: "I don't can't know"
          Correct sample: "I don't know" 
          --
          Incorrect sample: "${input}"
          Correct sample:`,
        max_tokens: 300,
        temperature: 0.3,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
      });
      return response.body.generations[0].text
} 