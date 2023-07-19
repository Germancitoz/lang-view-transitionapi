type Uses =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'mobile'
  | 'desktop'
  | 'game'
  | 'other';

export interface Language {
  name: string;
  description: string;
  use_for: Uses[];
  image: string;
  color: string;
}

export const languages: Language[] = [
  {
    name: 'JavaScript',
    description:
      'JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with this exciting language and gives you an idea of what is possible.',
    use_for: [
      'frontend',
      'backend',
      'database',
      'mobile',
      'desktop',
      'game',
      'other',
    ],
    image: 'https://cdn.svgporn.com/logos/javascript.svg',
    color: '#f7df1e',
  },

  {
    name: 'TypeScript',
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.',
    use_for: [
      'frontend',
      'backend',
      'database',
      'mobile',
      'desktop',
      'game',
      'other',
    ],
    image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    color: '#3178c6',
  },

  {
    name: 'Python',
    description:
      "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
    use_for: ['backend', 'database', 'mobile', 'desktop', 'game', 'other'],
    image: 'https://cdn.svgporn.com/logos/python.svg',
    color: '#3776ab',
  },
];
