export interface Step {
  id: string;
  step: string;
  text: string;
  subtext?: string; // Optional field
}

export interface ContentItem {
  title: string;
  id: string;
  steps: Step[];
}

export interface HelpData {
  heading: string;
  content: ContentItem[];
}

export const helpInstructions: HelpData = {
  heading: 'Help',
  content: [
    {
      title: 'Connecting',
      id: '001',
      steps: [
        {
          id: '01',
          step: '1. ',
          text: 'Turn on the sleeve',
          subtext: 'There is a small button on the infopad next to the power light.',
        },
        {
          id: '02',
          step: '2. ',
          text: 'Check the number from the sleeve.',
        },
        {
          id: '03',
          step: '3. ',
          text: 'Open the connection page from the Spirit Ludi application.',
        },
        {
          id: '04',
          step: '4. ',
          text: 'Press "connect"',
        },
        {
          id: '05',
          step: '5. ',
          text: "Pick your sleeve's number in the menu",
        },
        {
          id: '06',
          step: '6. ',
          text: 'Sleeve connected and ready to play!',
        },
      ],
    },
    {
      title: 'Charging the sleeve',
      id: '002',
      steps: [
        {
          id: '01',
          step: '1. ',
          text: 'The sleeve has a low battery when it has a red light on.',
        },
        {
          id: '02',
          step: '2. ',
          text: 'Turn off the sleeve',
          subtext: 'There is a small button on the infopad next to the power light.',
        },
        {
          id: '03',
          step: '3. ',
          text: 'Put the charging cable in',
          subtext:
            'The sleeve has a small charging hole on the upper arm on the side of the battery.',
        },
        {
          id: '04',
          step: '4. ',
          text: 'The sleeve is charging when the battery light is green.',
        },
        {
          id: '05',
          step: '5. ',
          text: 'The sleeve battery is full when the green light turns off.',
        },
      ],
    },
    {
      title: 'Turn off the sleeve',
      id: '003',
      steps: [
        {
          id: '01',
          step: '1. ',
          text: 'Press the small button on the infopad next to the power light.',
        },
        {
          id: '02',
          step: '2. ',
          text: 'The sleeve turns off when all the lights turn off.',
        },
      ],
    },
    {
      title: 'Sending and receiving',
      id: '004',
      steps: [
        {
          id: '01',
          step: '1. ',
          text: 'Connect the sleeve to the Spirit Ludi application.',
          subtext: 'Look at the instructions from the Help – Connecting page.',
        },
        {
          id: '02',
          step: '2. ',
          text: 'Touch the sensor on your lower arm to send the vibration to your team.',
        },
        {
          id: '03',
          step: '3. ',
          text: 'When someone else in your team touches their sensor, you will feel vibration on your lower arm.',
        },
      ],
    },
  ],
};
