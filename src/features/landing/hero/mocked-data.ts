export type SearchResult = Readonly<{
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}>;

export const MOCKED_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'ChatGPT',
    description: 'Advanced language model for conversation and text generation',
    category: 'Language AI',
    url: 'https://chat.openai.com',
  },
  {
    id: '2',
    title: 'Midjourney',
    description: 'AI-powered image generation from text descriptions',
    category: 'Image Generation',
    url: 'https://www.midjourney.com',
  },
  {
    id: '3',
    title: 'Claude',
    description: "Anthropic's AI assistant for various tasks",
    category: 'AI Assistant',
    url: 'https://www.anthropic.com',
  },
  {
    id: '4',
    title: 'DALL-E',
    description: "OpenAI's text-to-image generation model",
    category: 'Image Generation',
    url: 'https://openai.com/dall-e-2',
  },
  {
    id: '5',
    title: 'Jasper',
    description: 'AI writing assistant for marketing and content creation',
    category: 'Writing',
    url: 'https://www.jasper.ai',
  },
];
