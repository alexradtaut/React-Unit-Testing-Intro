import stringsModule from './strings';
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};
describe('language scripts test', () => {
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  test('returns correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings);
    expect(string).toBe('🚀');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns submit string in en if language doesn`t exist', () => {
    const string = getStringByLanguage('xxx', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for language [xxx]'
    );
  });

  test('returns submit string in en if submit doesn`t exist in language', () => {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for language [mermish]'
    );
  });
});
