export interface ConnectionInstructions {
  id: string;
  step: string;
  description: string;
  image: string;
}

export const CONNECTION_INSTRUCTIONS: ConnectionInstructions[] = [
  {
    id: '1',
    step: 'How does it work?',
    description: 'Turn on the sleeve',
    image: 'sleeve_power.png',
  },
  {
    id: '2',
    step: 'How does it work?',
    description: 'Check the number from the sleeve',
    image: 'sleeve_tag.png',
  },
  {
    id: '3',
    step: 'How does it work?',
    description: 'Connect the sleeve to the app',
    image: 'phone_white.png',
  },
];

export const GUIDE_IMAGES: { [key: string]: any } = {
  'sleeve_power.png': require('../assets/images/guide/sleeve_power.png'),
  'sleeve_tag.png': require('../assets/images/guide/sleeve_tag.png'),
  'phone_white.png': require('../assets/images/guide/phone_white.png'),
};
