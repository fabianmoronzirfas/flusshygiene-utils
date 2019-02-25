import devlogGen from '../src/lib/devlog';
afterEach(() => jest.restoreAllMocks());

describe('development logging', () => {
  const PORT = 3004;
  const log = devlogGen(PORT);
  it('should log to console', () => {
    let output = '';
    process.env.NODE_ENV = 'development';
    // tslint:disable-next-line:no-console
    console.log = jest.fn((str: string) => (output += str));
    log();
    expect(output).toBe(`listening on port http://localhost:${PORT}`);

  });
  it('should log NOT to console', () => {
    let output = '';
    process.env.NODE_ENV = '';
    // tslint:disable-next-line:no-console
    console.log = jest.fn((str: string) => (output += str));
    log();
    expect(output).toBe('');
  });
});
