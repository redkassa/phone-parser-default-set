import {
  IResolver,
  IFormat,
  TParsedPhone,
  TPhoneParserOptions,
} from '../types';

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

export default (
  parser: (value: string, options: TPhoneParserOptions) => TParsedPhone,
  value: string,
  formats?: Array<IFormat>,
): TParsedPhone => {
  let result = null;

  if ((value.length === 1 && value === '+') || value.startsWith('+')) {
    result = parser(value, { formats });
  } else {
    result = parser(value, { resolvers, formats });
  }

  return result;
};
