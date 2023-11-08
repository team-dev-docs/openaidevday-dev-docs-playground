import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "generate an array of JSON objects that represent 10 funny jokes" },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
  console.log("the parsed consistent json", JSON.parse(response.choices[0].message.content))
}
main();