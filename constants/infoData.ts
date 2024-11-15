// Define TypeScript interfaces for structure
export interface Step {
  id: string;
  step: string;
  text: string;
}

export interface InfoContentItem {
  id: string;
  title: string;
  text: string;
  steps?: Step[]; // Optional steps field
}

export interface InfoData {
  heading: string;
  content: InfoContentItem[];
}

// Create the data object based on the provided JSON
export const infoData: InfoData = {
  heading: 'Info',
  content: [
    {
      id: '1',
      title: 'Project Information',
      text: 'This application was developed in the “Developing Competence in Smart Wearables” -project.',
    },
    {
      id: '2',
      title: 'Report an issue',
      text: 'To report an issue:',
      steps: [
        {
          id: '01',
          step: '1. ',
          text: 'Copy device serial number from above. You will need it in the issue.',
        },
        {
          id: '02',
          step: '2. ',
          text: 'You can copy it by clicking the icon next to serial number.',
        },
        {
          id: '03',
          step: '3. ',
          text: 'Fill out the form with the correct serial number.',
        },
        {
          id: '04',
          step: '4. ',
          text: 'Issue form will open up when you press the Report an issue button.',
        },
      ],
    },
  ],
};
