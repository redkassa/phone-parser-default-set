import { parsePhoneNumber } from '@redkassa/phone-parser'; // eslint-disable-line
import { defaultFormats, parsePriorityRU } from '../src';

document.addEventListener('DOMContentLoaded', () => {
  const input = <HTMLInputElement>document.querySelector('[name=phone]');

  const formats = defaultFormats;

  let currentDialCode: string | null = null;

  input.onkeydown = e => {
    const target = <HTMLInputElement>e.target;
    const { value } = target;

    const prevChar = value.slice(
      target.selectionStart! - 1,
      target.selectionEnd!,
    );

    const regexpOnlyDigits = new RegExp(/\D/, 'g');

    if (
      target.selectionStart === target.selectionEnd &&
      regexpOnlyDigits.test(prevChar) &&
      e.key === 'Backspace'
    ) {
      if (value === currentDialCode || value === '+') {
        input.value = '';
      } else {
        input.value = value.slice(0, value.length - 1);
      }
    }
  };

  input.onkeyup = e => {
    const target = <HTMLInputElement>e.target;
    const { value } = target;

    if (value) {
      const result = parsePriorityRU(parsePhoneNumber, value, formats);

      currentDialCode = result.dialCode;

      input.value = result.formattedNumber;
    }
  };
});
