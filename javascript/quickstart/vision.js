import OpenAI from "openai";
import { promises as fs } from 'fs';

const openai = new OpenAI();

async function writeToFile(filename, content) {
  try {
      await fs.writeFile(filename, content);
      console.log(`Content written to ${filename}`);
  } catch (error) {
      console.error('Error writing to file:', error);
  }
}

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
  writeToFile("../response.txt", JSON.stringify(response.choices[0]))
  
}
main();