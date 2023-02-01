const COHERE_API_KEY = "DDDvR4315GURC6C33KnG5ZdBpT6xt0zisDDJC9wk"
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate"

export const fixMyEnglish = async (input) => {
    const data = {
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
      }
    const response = await fetch(COHERE_API_GENERATE_URL, {
        method: 'POST',
        headers: {
            Authorization: `BEARER ${COHERE_API_KEY}`,
            'Content-Type': 'application/json', 
            'Cohere-Version':'2022-12-06'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())

    const {text} = response.generations[0]

    return text.replace('--', '').trim()
    
} 