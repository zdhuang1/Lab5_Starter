// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber Tests
test('valid phone number 1', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(functions.isPhoneNumber('123')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail Tests
test('valid email 1', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(functions.isEmail('hello@ucsd.edu')).toBe(true);
});
test('invalid email 1', () => {
  expect(functions.isEmail('test@')).toBe(false);
});
test('invalid email 2', () => {
  expect(functions.isEmail('example.com')).toBe(false);
});

// isStrongPassword Tests
test('valid strong password 1', () => {
  expect(functions.isStrongPassword('Abcdef123')).toBe(true);
});
test('valid strong password 2', () => {
  expect(functions.isStrongPassword('Zxy_999')).toBe(true);
});
test('invalid strong password 1', () => {
  expect(functions.isStrongPassword('123bad')).toBe(false);
});
test('invalid strong password 2', () => {
  expect(functions.isStrongPassword('ab')).toBe(false);
});

// isDate Tests
test('valid date 1', () => {
  expect(functions.isDate('11/22/2022')).toBe(true);
});
test('valid date 2', () => {
  expect(functions.isDate('1/2/2023')).toBe(true);
});
test('invalid date 1', () => {
  expect(functions.isDate('11/22/22')).toBe(false);
});
test('invalid date 2', () => {
  expect(functions.isDate('2022-11-22')).toBe(false);
});

// isHexColor Tests
test('valid hex color 1', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});
test('valid hex color 2', () => {
  expect(functions.isHexColor('#FF0000')).toBe(true);
});
test('invalid hex color 1', () => {
  expect(functions.isHexColor('#12')).toBe(false);
});
test('invalid hex color 2', () => {
  expect(functions.isHexColor('red')).toBe(false);
});