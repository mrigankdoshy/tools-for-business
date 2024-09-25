'use client';

import {
  Activity,
  Brain,
  ChevronRight,
  Code,
  Cpu,
  FileText,
  Globe,
  Layers,
  MessageCircle,
  Search,
  Settings,
  Shield,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/ui/button';

const aiTools = [
  {
    id: 1,
    title: 'TensorFlow',
    description:
      'An open-source machine learning platform for building and deploying models in various environments.',
    icon: <Brain className="size-6" />,
    link: 'https://www.tensorflow.org/',
  },
  {
    id: 2,
    title: 'Unbounce',
    description:
      'AI-powered landing page platform designed to optimize conversions and A/B testing with ease.',
    icon: <Layers className="size-6" />,
    link: 'https://unbounce.com/',
  },
  {
    id: 3,
    title: 'Tome',
    description:
      'Generative storytelling AI that helps you create presentations and narratives using dynamic content.',
    icon: <FileText className="size-6" />,
    link: 'https://beta.tome.app/',
  },
  {
    id: 4,
    title: 'OpenAI',
    description:
      'An AI research lab that provides language models like GPT for various natural language processing applications.',
    icon: <MessageCircle className="size-6" />,
    link: 'https://openai.com/',
  },
  {
    id: 5,
    title: 'Hugging Face',
    description:
      'A platform for sharing and building machine learning models, specializing in natural language understanding.',
    icon: <Globe className="size-6" />,
    link: 'https://huggingface.co/',
  },
  {
    id: 6,
    title: 'RunwayML',
    description:
      'A creative suite that provides AI tools for video editing, image generation, and more, designed for creators.',
    icon: <Activity className="size-6" />,
    link: 'https://runwayml.com/',
  },
  {
    id: 7,
    title: 'Cohere',
    description:
      'A natural language processing platform that provides language models and tools for text understanding and generation.',
    icon: <Code className="size-6" />,
    link: 'https://cohere.ai/',
  },
  {
    id: 8,
    title: 'DeepMind',
    description:
      'AI research lab known for developing algorithms that achieve superhuman performance in games and other fields.',
    icon: <Shield className="size-6" />,
    link: 'https://www.deepmind.com/',
  },
  {
    id: 9,
    title: 'DataRobot',
    description:
      'An AI platform that helps automate the building and deployment of machine learning models for enterprises.',
    icon: <Settings className="size-6" />,
    link: 'https://www.datarobot.com/',
  },
  {
    id: 10,
    title: 'UiPath',
    description:
      'An AI-driven RPA (robotic process automation) platform that automates repetitive tasks across businesses.',
    icon: <Search className="size-6" />,
    link: 'https://www.uipath.com/',
  },
  {
    id: 11,
    title: 'Seldon',
    description:
      'An open-source platform that helps deploy, scale, and manage machine learning models in production environments.',
    icon: <Cpu className="size-6" />,
    link: 'https://www.seldon.io/',
  },
  {
    id: 12,
    title: 'H2O.ai',
    description:
      'A leader in open-source AI and machine learning, providing tools for building and deploying models at scale.',
    icon: <Terminal className="size-6" />,
    link: 'https://www.h2o.ai/',
  },
];

export default function ToolsSection() {
  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
            Build your tool kit.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose an <strong>AI tool</strong> that&apos;s packed with the best
            features for product.
          </p>
        </div>
        <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className={cn(
                'relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white'
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  {tool.icon}
                  <h2 className="text-base font-semibold leading-7 my-2">
                    {tool.title}
                  </h2>
                  <p className="h-16 text-sm leading-5 text-black/70 dark:text-white">
                    {tool.description}
                  </p>
                </div>
              </div>
              <a
                href={tool.link}
                className="ml-4 flex items-center gap-2 text-sm font-medium"
              >
                Learn more
                <ChevronRight className="w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
        <Link
          href="#"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
            }),
            'group mt-4 rounded-[2rem] px-6'
          )}
        >
          Explore All Tools
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
