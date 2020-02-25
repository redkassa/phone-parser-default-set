import { parsePhoneNumber } from '@redkassa/phone-parser';
import parsePriorityRU from './parsePriorityRU';

describe('parsePriorityRU tests', () => {
  const formats = [
    {
      code: 'RU',
      mask: '(###) ### ####',
    },
  ];

  test('Should get resolve phone number as RU without replace "9"', () => {
    const result = parsePriorityRU(parsePhoneNumber, '919');

    expect(result.code).toBe('RU');
    expect(result.dialCode).toBe('+7');
    expect(result.formattedNumber).toBe('+7 919');
  });

  test('Should get resolve phone number as RU  with replace "8"', () => {
    const result = parsePriorityRU(parsePhoneNumber, '8919');

    expect(result.code).toBe('RU');
    expect(result.dialCode).toBe('+7');
    expect(result.formattedNumber).toBe('+7 919');
  });

  test('Should get resolve phone number as TR if passed value starts with "+"', () => {
    const result = parsePriorityRU(parsePhoneNumber, '+901');

    expect(result.code).toBe('TR');
    expect(result.dialCode).toBe('+90');
  });

  test('Should apply formats', () => {
    const result = parsePriorityRU(parsePhoneNumber, '9198221234', formats);

    expect(result.formattedNumber).toBe('+7 (919) 822 1234');
  });
});
