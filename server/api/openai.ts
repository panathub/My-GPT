import OpenAI from "openai";


export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();
  const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  
  console.log(completion.choices)
  return completion.choices;
});