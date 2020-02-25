import { IFormat } from '../types';

const formats: Array<IFormat> = [
  {
    code: 'RU',
    mask: '(###) ### ####',
  },
  {
    code: 'UA',
    mask: '## # ##-##-##',
  },
  {
    code: 'BY',
    mask: '## ### ## ##',
  },
  {
    code: 'US',
    mask: '###-###-####',
  },
  {
    code: 'DE',
    mask: '### ### ####',
  },
  {
    code: 'KZ',
    mask: '(###) ### ####',
  },
  {
    code: 'UK',
    mask: '##### #####',
  },
  {
    code: 'NL',
    mask: '## ### ####',
  },
  {
    code: 'UZ',
    mask: '## #######',
  },
  {
    code: 'IL',
    mask: '### #####',
  },
  {
    code: 'FR',
    mask: '# ## ## ## ##',
  },
  {
    code: 'LV',
    mask: '##-##-##-##',
  },
  {
    code: 'EE',
    mask: '### ####',
  },
  {
    code: 'FI',
    mask: '###-###-##',
  },
  {
    code: 'ES',
    mask: '### ## ## ##',
  },
  {
    code: 'IT',
    mask: '### ### ####',
  },
  {
    code: 'TR',
    mask: '### ### ## ##',
  },
  {
    code: 'PL',
    mask: '## ### ####',
  },
  {
    code: 'TH',
    mask: '#### ####',
    appendTail: true,
  },
];

export default formats;
