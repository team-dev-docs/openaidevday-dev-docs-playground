# OpenAI Dev-Day Quickstart


## What's this:

OpenAi just had their dev day yesterday where they unveiled a couple new models and features and developer features that you can instantly try with in this interactive tutorial in a couple of minutes such as:

-GPT4 API with Vision
-Assistants(their answers to agents)
-Enforceable JSON mode to make it easier for developers to use the outputs in production code.

We are going to be trying all of these in a couple of minutes. After this tutorial also checkout their update docs to learn more:

[General OPENAI Docs](https://platform.openai.com/docs/introduction)

[GPT4 with Vison](https://platform.openai.com/docs/guides/vision/vision)

[Assistants](https://platform.openai.com/docs/assistants/overview)

[JSON Mode](https://platform.openai.com/docs/guides/text-generation/json-mode)

# Tutorial Time

## Prereq: export your API Key


Before we start the quickstart export API_KEY

```

export OPENAI_API_KEY=&lt;YOUR API KEY&gt;

```

## Prereq: cd into the right folder

```devdocs_run

cd javascript/quickstart

```

## Run the first example for Vision:

The chatgpt API when set <code>gpt-4-vision-preview</code> can now explain images and do things with them. Try this example straight from the docs.

Run the example to try it out:

```devdocs_run

node vision.js

```

You should get a response explain this image from wikipedia. Now let's try the next tutorial.


