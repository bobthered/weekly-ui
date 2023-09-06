import inquirer from 'inquirer';

export const prompt = async () => {
  const { primary, url } = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'What is the dribbble.com url?',
      default:
        'https://dribbble.com/shots/14425035-Awayday-Travel-App-Daily-UI-Challenge-001-Sign-up-flow',
    },
    {
      type: 'input',
      name: 'primary',
      message: 'What is the primary hex color?',
      default: '#926EFF',
    },
  ]);
  return { primary, url };
};
