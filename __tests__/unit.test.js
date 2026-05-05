// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('123')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});