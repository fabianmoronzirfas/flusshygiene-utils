import devlogGen from '../src/lib/devlog';
describe('all exports', () => {
  test('what we have', () => {
    expect(devlogGen).toBeInstanceOf(Function);
  });
});
