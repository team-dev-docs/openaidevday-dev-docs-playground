import OpenAI from "openai";

const openai = new OpenAI();
import fs from 'fs';

const file = await openai.files.create({
    file: fs.createReadStream("../superheros.md"),
    purpose: "assistants",
  });
  
  // Create an assistant using the file ID
  const assistant = await openai.beta.assistants.create({
    instructions: "You calculate which superheros are the strongest using math, refer to the file on which superheros power to estimate.",
    model: "gpt-4-1106-preview",
    tools: [{"type": "code_interpreter"}],
    file_ids: [file.id]
  });


  console.log(assistant)