[**Open in Github Codespaces**](https://codespaces.new/team-dev-docs/openaidevday-dev-docs-playground?devcontainer_path=.devcontainer/javascript_devday/devcontainer.json)++{style="display: inline-block; padding: 10px 16px; font-size: 14px; font-weight: bold; text-align: center; text-decoration: none; white-space: nowrap; background-color: #000; color: #fff; border-radius: 6px; border: none; cursor: pointer;"}
```javascript

import OpenAI from "openai";

const openai = new OpenAI();

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
}
main();
```
