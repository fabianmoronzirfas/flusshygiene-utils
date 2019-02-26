import devlogGen from '../src/lib/devlog';
import protocoolMessage from '../src/lib/protocool';
describe('all exports devlogGen', () => {
  test('what we have', () => {
    expect(devlogGen).toBeInstanceOf(Function);
  });
  test('what we have in protocool', () => {
    expect(protocoolMessage).toBeInstanceOf(Function);
  });
});
