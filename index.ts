import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      max_tokens: 2056,

      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Given a resume image. I would like to extract information from CV images in JSON format. I am interested in extracting sections like name, education, previous projects (name of a project, description), and skills. The output should be in JSON format" },
            {
              type: "image_url",
              image_url: {
                "url": "https://cdn.resumod.co/uploads/image-1681976987112.jpg",
              },
            },
          ],
        },
      ],
    });
    console.log(response.choices[0]);
  }
  main();