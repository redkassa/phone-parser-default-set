import { IResolver } from '../types';

const resolvers: Array<IResolver> = [
  {
    options: [
      {
        value: '8',
        replace: true,
      },
      {
        value: '9',
        replace: false,
      },
    ],
    target: {
      firstChar: '7',
      code: 'RU',
    },
  },
];

export default resolvers;
