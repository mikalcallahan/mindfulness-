export interface Project {
  name: string;
  link: string;
  description?: string;
  roles?: string;
}

export const projectsList: Project[] = [
  {
    name: 'Wonderlabs',
    link: 'https://wonderlabs.ca',
    description: 'redefining fintech',
  },
  {
    name: 'Moment',
    link: 'https://apps.apple.com/ca/app/moment-meditation/id6590602340',
    description: 'take a moment to reconnect with yourself with Moment',
  },
  {
    name: 'scalaquote',
    link: 'https://github.com/mikalcallahan/scalaquote',
    description:
      'scala-cli script to grab a list of quotes from a json and randomly display one',
  },
  {
    name: 'QuoteScript',
    link: 'https://github.com/mikalcallahan/quotescript',
    description:
      'swift script to grab a list of quotes from a json and randomly display one',
  },
  {
    name: 'Vish',
    link: 'https://getvish.com',
    description: 'Empower Your Salon With Precise Color Management',
  },
  {
    name: 'Cosé',
    link: 'https://www.figma.com/file/LSCWlA3XrTkpU8RUPlYV5grz/conceptions?node-id=177%3A38',
  },
  {
    name: 'Mindfulstreaming',
    link: 'http://mindfulstreaming.now.sh',
  },
  {
    name: 'VueBoilerplate',
    link: 'https://github.com/mikalcallahan/vuejs-boilerplate',
  },
  {
    name: 'Sinnoise',
    link: 'https://github.com/mikalcallahan/sinnoise',
  },
  {
    name: 'Metamorphosis',
    link: 'https://github.com/mikalcallahan/metamorphosis',
  },
  {
    name: 'Conscient',
    link: 'https://github.com/mikalcallahan/conscient',
  },
];
