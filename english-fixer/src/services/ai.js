const COHERE_API_KEY = "DDDvR4315GURC6C33KnG5ZdBpT6xt0zisDDJC9wk"
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate"
const COHERE_API_DETECT_LANGUAGE = "https://api.cohere.ai/detect-language"

export const checkEnglish = async  (input) =>{
    const data = {
        texts: [input]
      }
    
      const { results } = await fetch(COHERE_API_DETECT_LANGUAGE, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `BEARER ${COHERE_API_KEY}`,
          "Content-Type": 'application/json',
          "Cohere-Version": '2022-12-06'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
    
      const [{ language_code }] = results
      return language_code === 'en'
    }


export const fixMyEnglish = async (input) => {
    const data = {
        model: "command-xlarge",
        prompt:`This is a spell checker generator. 
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
    Incorrect sample: "Jelou, jau ar iu?"
    Correct sample: "Hello, how are you?"
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

    const { text } = response.generations[0]
    const length = input.length
   

    return text
    .slice(0, length + 1 )
    .replace('--', '')
    .replaceAll('"', '')
    .trim()
    
} 