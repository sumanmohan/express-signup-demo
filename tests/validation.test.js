const { isValidEmail } = require('../public/validation');

describe('AC-2: Client-side Email Validation', () => {
  test('returns true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('suman.mohan@atlassian.com')).toBe(true);
  });

  test('returns false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});